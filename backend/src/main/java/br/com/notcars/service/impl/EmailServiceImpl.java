package br.com.notcars.service.impl;

import br.com.notcars.config.aspect.LogInfo;
import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.model.ReservationEntity;
import br.com.notcars.service.EmailService;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

  private final JavaMailSender mailSender;

  @LogInfo
  public void sendEmail(String destination, String subject, String body) throws MessagingException {
    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setFrom("dh.notcars@gmail.com");
    helper.setTo(destination);
    helper.setSubject(subject);
    helper.setText(body, true);
    mailSender.send(message);
  }

  public String registrationEmail(String name) {
    String caminhoArquivo = "src/main/resources/registration.html";
    try {
      byte[] bytesArquivo = Files.readAllBytes(Paths.get(caminhoArquivo));
      String conteudoArquivo = new String(bytesArquivo, StandardCharsets.UTF_8);
      return conteudoArquivo.replace("{user}", name.toUpperCase());
    } catch (IOException e) {
      e.printStackTrace();
    }
    return "";
  }


  public String reservationEmail(String name, ReservationEntity reservation) {
    DateTimeFormatter formatters = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    String caminhoArquivo = "src/main/resources/reservation.html";
    try {
      byte[] bytesArquivo = Files.readAllBytes(Paths.get(caminhoArquivo));
      String conteudoArquivo = new String(bytesArquivo, StandardCharsets.UTF_8);
      conteudoArquivo =  conteudoArquivo.replace("{user}", name.toUpperCase());
      conteudoArquivo =  conteudoArquivo.replace("{hour}", reservation.getHourStartReservation().toString() );
      conteudoArquivo =  conteudoArquivo.replace("{dateBegin}", reservation.getDateBegin().format(formatters));
      conteudoArquivo =  conteudoArquivo.replace("{dateEnd}", reservation.getDateEnd().format(formatters));
      conteudoArquivo =  conteudoArquivo.replace("{city}", reservation.getProduct().getCity().getName());
      conteudoArquivo =  conteudoArquivo.replace("{product}", reservation.getProduct().getName());
      return conteudoArquivo;
    } catch (IOException e) {
      e.printStackTrace();
    }
    return "";
  }


}
