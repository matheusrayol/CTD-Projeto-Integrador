package br.com.notcars.service.impl;

import br.com.notcars.dto.user.UserRequest;
import br.com.notcars.exceptions.BadRequestException;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.UserMapper;
import br.com.notcars.model.FunctionEntity;
import br.com.notcars.model.UserEntity;
import br.com.notcars.repository.UserRepository;
import br.com.notcars.service.EmailService;
import br.com.notcars.service.FunctionService;
import javax.mail.MessagingException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("UserServiceImpl")
class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private  EmailServiceImpl emailServiceImpl;

    @Mock
    private UserMapper userMapper;

    @Mock
    private FunctionService functionServiceImpl;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @InjectMocks
    private UserServiceImpl userServiceImpl;

    @Test
    @DisplayName("Deve localizar um usuário por email quando o email existir")
    void findByEmailWhenEmailExists() {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail("test@test.com");
        when(userRepository.findByEmail("test@test.com")).thenReturn(Optional.of(userEntity));

        UserEntity user = userServiceImpl.findByEmail("test@test.com");

        assertEquals(userEntity, user);
    }

    @Test
    @DisplayName("Deve lançar uma exceção quando o email não existir")
    void findByEmailWhenEmailDoesNotExistThenThrowNotFoundException() {
        String email = "email@email.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());
        NotFoundException exception =
                assertThrows(NotFoundException.class, () -> userServiceImpl.findByEmail(email));
        assertEquals("Usuário não encontrado", exception.getMessage());
    }

    @Test
    @DisplayName("Devem ser lançadas exceções quando os dados do usuário forem inválidos")
    void loadUserByUsernameWhenEmailDoesNotExistThenThrowNotFoundException() {
        String email = "email@email.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        Throwable exception =
                assertThrows(
                        NotFoundException.class, () -> userServiceImpl.loadUserByUsername(email));

        assertEquals("Usuário não encontrado", exception.getMessage());
    }

    @Test
    @DisplayName("Deve retornar um UserDetails quando o email existir")
    void loadUserByUsernameWhenEmailExists() {
        String email = "test@test.com";
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(userEntity));

        UserDetails userDetails = userServiceImpl.loadUserByUsername(email);

        assertEquals(userEntity, userDetails);
    }

    @Test
    @DisplayName("Devem ser lançadas exceções quando os dados do usuário forem inválidos")
    void createUserWhenEmailIsAlreadyRegisteredThenThrowException() {
        UserRequest userRequest = new UserRequest();
        userRequest.setEmail("test@test.com");
        userRequest.setFunctionId(1L);
        userRequest.setName("test");
        userRequest.setPassword("123456");
        userRequest.setSurname("test");

        when(userRepository.findByEmail(userRequest.getEmail()))
                .thenReturn(Optional.of(new UserEntity()));

        assertThrows(BadRequestException.class, () -> userServiceImpl.create(userRequest));
    }

    @Test
    @DisplayName("Devem ser lançadas exceções quando os dados do usuário forem inválidos")
    void createUserWhenEmailIsNotRegistered() throws MessagingException {
        UserRequest userRequest = new UserRequest();
        userRequest.setEmail("test@test.com");
        userRequest.setFunctionId(1L);
        userRequest.setName("test");
        userRequest.setPassword("123456");
        userRequest.setSurname("test");

        FunctionEntity functionEntity = new FunctionEntity();
        functionEntity.setId(1L);
        functionEntity.setName("ADMIN");

        UserEntity userEntity = new UserEntity();
        userEntity.setEmail("test@test.com");
        userEntity.setFunction(functionEntity);
        userEntity.setName("test");
        userEntity.setPassword("123456");
        userEntity.setSurname("test");

        when(userRepository.findByEmail(userRequest.getEmail())).thenReturn(Optional.empty());
        when(functionServiceImpl.findById(userRequest.getFunctionId())).thenReturn(functionEntity);
        when(userMapper.toUserEntity(userRequest, functionEntity)).thenReturn(userEntity);
        when(passwordEncoder.encode(userEntity.getPassword())).thenReturn("123456");
        when(userRepository.save(userEntity)).thenReturn(userEntity);
        when(emailServiceImpl.registrationEmail(any())).thenReturn("teste");
        doNothing().when(emailServiceImpl).sendEmail(any(), any(), any());

        UserEntity result = userServiceImpl.create(userRequest);

        assertEquals(userEntity, result);
    }
}