package br.com.notcars.service;

import br.com.notcars.model.ReservationEntity;
import javax.mail.MessagingException;

public interface EmailService {
  void sendEmail(String destinatario, String assunto, String conteudo) throws MessagingException;

  String registrationEmail(String name);

  String reservationEmail(String name, ReservationEntity reservation);
}
