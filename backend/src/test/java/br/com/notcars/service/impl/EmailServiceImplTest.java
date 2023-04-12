package br.com.notcars.service.impl;

import br.com.notcars.constant.EmailRegistrationConstant;
import br.com.notcars.model.CityEntity;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.model.ReservationEntity;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.javamail.JavaMailSender;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayName("EmailServiceImpl test")
class EmailServiceImplTest {

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private EmailServiceImpl emailService;

    @Test
    @DisplayName("Deve gerar um email da reserva com as informações corretas")
    void reservationEmailWithCorrectInformation() {
        String name = "John Doe";
        ReservationEntity reservation = new ReservationEntity();
        reservation.setHourStartReservation(LocalTime.of(10, 0));
        reservation.setDateBegin(LocalDate.of(2022, 1, 1));
        reservation.setDateEnd(LocalDate.of(2022, 1, 2));

        ProductEntity product = new ProductEntity();
        CityEntity city = new CityEntity();
        city.setName("New York");
        product.setName("Electric Scooter");
        product.setCity(city);
        reservation.setProduct(product);

        String emailContent = emailService.reservationEmail(name, reservation);

        assertTrue(emailContent.contains("JOHN DOE"));
        assertTrue(emailContent.contains("10:00"));
        assertTrue(emailContent.contains("01/01/2022"));
        assertTrue(emailContent.contains("02/01/2022"));
        assertTrue(emailContent.contains("New York"));
        assertTrue(emailContent.contains("Electric Scooter"));
    }

    @Test
    @DisplayName("Deve retornar o nome do usuário no conteúdo do email em maiúsculas")
    void registrationEmailReplacesUserNameWithUppercase() {
        String name = "John Doe";
        String expectedContent =
                EmailRegistrationConstant.registration.replace("{user}", name.toUpperCase());

        String actualContent = emailService.registrationEmail(name);

        assertEquals(
                expectedContent,
                actualContent,
                "O conteúdo do email de registro deve conter o nome de usuário em maiúsculas");
    }

    @Test
    @DisplayName("Deve enviar um email com o endereço fornecido, assunto e conteúdo")
    void sendEmailWithGivenAddresseeSubjectAndContent() {
        String addressee = "test@example.com";
        String subject = "Test Subject";
        String content = "Test Content";
        MimeMessage mimeMessage = mock(MimeMessage.class);

        when(mailSender.createMimeMessage()).thenReturn(mimeMessage);

        try {
            emailService.sendEmail(addressee, subject, content).get();
        } catch (MessagingException | InterruptedException | ExecutionException e) {
            fail("Exception should not be thrown");
        }

        verify(mailSender, times(1)).send(any(MimeMessage.class));
    }
}