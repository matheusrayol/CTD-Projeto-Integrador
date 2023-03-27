package br.com.notcars.service.impl;

import br.com.notcars.config.aspect.LogInfo;
import org.springframework.mail.javamail.JavaMailSender;
import javax.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl {

  private final JavaMailSender mailSender;

  @LogInfo
  public void sendEmail(String destinatario, String assunto, String conteudo) throws Exception {
    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setFrom(""); // TODO add email
    helper.setTo(destinatario);
    helper.setSubject(assunto);
    helper.setText(conteudo, true);
    mailSender.send(message);
  }
}
