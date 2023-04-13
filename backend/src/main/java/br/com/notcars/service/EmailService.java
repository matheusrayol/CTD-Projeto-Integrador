package br.com.notcars.service;

import br.com.notcars.model.ReservationEntity;
import java.util.concurrent.Future;
import javax.mail.MessagingException;

public interface EmailService {
  Future<String> sendEmail(String addressee, String subject, String content) throws MessagingException, InterruptedException;

  String registrationEmail(String name);

  String reservationEmail(String name, ReservationEntity reservation);
}
