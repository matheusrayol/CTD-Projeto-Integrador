package br.com.notcars.service.impl;

import br.com.notcars.config.aspect.LogInfo;
import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.model.ReservationEntity;
import br.com.notcars.service.EmailService;
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
    return "<div>Olá " + name.toUpperCase() + "! Seja muito bem-vindo(a) em nosso Site."
      + "<br>"
      + "Seu cadastro foi feito com sucesso, agora você faz parte da família notcars.</div>"
      + "<br>"
      + "<br>"
      + "<div>---------------------------------------------------</div>"
      + "<div> <strong>Notcars você encontra vários carros de luxo e que fazem bem ao meio ambiente!!</strong></div>"
      + "<div>---------------------------------------------------</div>"
      + "<br>"
      + "<br>"
      + "         <img src=https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/ourLogo.png height=60 >"
      + "<div> Acesse nosso site e divirta-se </div>";
  }

  public String reservationEmail(String name, ReservationEntity reservation) {
    DateTimeFormatter formatters = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    return "<div>Olá " + name.toUpperCase() + ". Seja muito bem-vindo(a)!"
      + "<br>"
      + "Sua reserva foi feita com sucesso!.</div>"
      + "<br>"
      + "<br>"
      + "<div>---------------------------------------------------</div>"
      + "<div> Horário previsto para retirada: " + reservation.getHourStartReservation() + "</div>"
      + "<div> Data de retirada: " + reservation.getDateBegin().format(formatters) + "</div>"
      + "<div> Data de entrega: " + reservation.getDateEnd().format(formatters) + "</div>"
      + "<div>---------------------------------------------------</div>"
      + "<br>"
      + "<br>"
      + "         <img src=https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/assets/ourLogo.png height=60 >"
      + "<div> Acesse nosso site e divirta-se </div>";
  }
}
