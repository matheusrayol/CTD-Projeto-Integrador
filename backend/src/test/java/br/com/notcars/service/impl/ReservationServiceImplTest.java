package br.com.notcars.service.impl;

import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.exceptions.BadRequestException;
import br.com.notcars.mapper.ReservationMapper;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.model.ReservationEntity;
import br.com.notcars.model.UserEntity;
import br.com.notcars.repository.ReservationRepository;
import br.com.notcars.service.ProductService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Collections;
import java.util.List;
import org.springframework.scheduling.annotation.AsyncResult;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayName("ReservationServiceImpl")
class ReservationServiceImplTest {

    @Mock
    private ReservationRepository reservationRepository;

    @Mock
    private  EmailServiceImpl emailServiceImpl;
    @Mock
    private UserServiceImpl userService;

    @Mock
    private ProductService productServiceImpl;

    @Mock
    private ReservationMapper reservationMapper;

    @InjectMocks
    private ReservationServiceImpl reservationServiceImpl;

    @Test
    @DisplayName("Devem ser retornadas todas as reservas para um dado ID de produto")
    void findAllByProductIdReturnsEmptyListWhenNoReservationsFound() {
        when(reservationRepository.findAllByProduct_Id(anyLong()))
                .thenReturn(Collections.emptyList());

        List<ReservationEntity> result;
        result = reservationServiceImpl.findAllByProductId(1L);

        assertTrue(result.isEmpty());
    }

    @Test
    @DisplayName("Devem ser retornadas todas as reservas para um dado ID de produto")
    void findAllByProductIdReturnsAllReservations() {
        ReservationEntity reservationEntity = new ReservationEntity();
        reservationEntity.setId(1L);
        reservationEntity.setHourStartReservation(LocalTime.of(10, 0));
        reservationEntity.setDateBegin(LocalDate.of(2020, 1, 1));
        reservationEntity.setDateEnd(LocalDate.of(2020, 1, 2));
        reservationEntity.setUser(new UserEntity());
        reservationEntity.setProduct(new ProductEntity());

        when(reservationRepository.findAllByProduct_Id(anyLong()))
                .thenReturn(Collections.singletonList(reservationEntity));

        List<ReservationEntity> result;
        result = reservationServiceImpl.findAllByProductId(1L);

        assertEquals(1, result.size());
        assertEquals(1L, result.get(0).getId());
        assertEquals(LocalTime.of(10, 0), result.get(0).getHourStartReservation());
        assertEquals(LocalDate.of(2020, 1, 1), result.get(0).getDateBegin());
        assertEquals(LocalDate.of(2020, 1, 2), result.get(0).getDateEnd());
        assertNotNull(result.get(0).getUser());
        assertNotNull(result.get(0).getProduct());
    }

    @Test
    @DisplayName("Devem ser retornadas todas as reservas para um dado ID de usuário")
    void createReservationWhenProductIsNotAvailableThenThrowException() {
        ReservationRequest reservationRequest = new ReservationRequest();
        reservationRequest.setDateBegin(LocalDate.now());
        reservationRequest.setDateEnd(LocalDate.now());
        reservationRequest.setHourStartReservation(LocalTime.now());
        reservationRequest.setProductId(1L);
        reservationRequest.setUserEmail("test@test.com");
        when(reservationRepository.findAllByAvailability(anyLong(), any(), any()))
                .thenReturn(Collections.singletonList(new ReservationEntity()));
        assertThrows(
                BadRequestException.class,
                () -> reservationServiceImpl.createReservation(reservationRequest));
    }

    @Test
    @DisplayName("Devem ser retornadas todas as reservas para um dado ID de usuário")
    void createReservationWhenProductIsAvailable() throws Exception {

        UserEntity user = new UserEntity();
        user.setEmail("test@test.com");
        user.setId(1L);
        user.setName("test");
        user.setSurname("test");

        ProductEntity product = new ProductEntity();
        product.setId(1L);
        product.setName("test");
        product.setDescription("test");

        ReservationRequest reservationRequest = new ReservationRequest();
        reservationRequest.setDateBegin(LocalDate.now());
        reservationRequest.setDateEnd(LocalDate.now());
        reservationRequest.setHourStartReservation(LocalTime.now());
        reservationRequest.setProductId(1L);
        reservationRequest.setUserEmail("test@test.com");

        ReservationEntity reservation = new ReservationEntity();
        reservation.setDateBegin(LocalDate.now());
        reservation.setDateEnd(LocalDate.now());
        reservation.setHourStartReservation(LocalTime.now());
        reservation.setUser(user);
        reservation.setProduct(product);

        when(reservationRepository.findAllByAvailability(anyLong(), any(), any()))
                .thenReturn(Collections.emptyList());
        when(userService.findByEmail(anyString())).thenReturn(user);
        when(productServiceImpl.findProductById(anyLong())).thenReturn(product);
        when(reservationMapper.toEntity(any(), any(), any())).thenReturn(reservation);
        when(reservationRepository.save(any())).thenReturn(reservation);
        when(emailServiceImpl.reservationEmail(any(), any())).thenReturn("teste");
        when(emailServiceImpl.sendEmail(any(), any(), any())).thenReturn(new AsyncResult<>("Email enviado"));

        ReservationEntity result = reservationServiceImpl.createReservation(reservationRequest);

        assertEquals(reservation, result);
    }
}