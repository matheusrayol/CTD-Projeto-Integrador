package br.com.notcars.controller;

import br.com.notcars.dto.user.AuthenticateRequest;
import br.com.notcars.dto.user.AuthenticationResponse;
import br.com.notcars.util.JwtUtil;
import br.com.notcars.dto.user.UserRequest;
import br.com.notcars.dto.user.UserResponse;
import br.com.notcars.mapper.UserMapper;
import br.com.notcars.model.UserEntity;
import br.com.notcars.service.impl.UserServiceImpl;
import javax.mail.MessagingException;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/user")
public class UserController {

  private static final String START_REQUEST = "[START REQUEST]";

  private static final String BASE_URL = "/user";


  private final UserServiceImpl userServiceImpl;

  private final AuthenticationManager authenticationManager;

  private final JwtUtil jwtUtil;

  private final UserMapper userMapper;

  @PostMapping
  public ResponseEntity<UserResponse> create(@RequestBody @Valid UserRequest userRequest) throws MessagingException {
    log.info(START_REQUEST + "[POST] " + BASE_URL);
    UserEntity user = userServiceImpl.create(userRequest);
    return ResponseEntity.status(HttpStatus.CREATED).body(userMapper.toUserResponse(user));
  }

  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> createAuthenticationToken(@RequestBody @Valid AuthenticateRequest userRequest) throws Exception {
    log.info(START_REQUEST + "[POST] " + BASE_URL + "/authenticate");
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userRequest.getEmail(), userRequest.getPassword()));
    } catch (BadCredentialsException e) {
      throw new Exception("Incorrect", e);
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
    final UserDetails userDetails = userServiceImpl.loadUserByUsername(userRequest.getEmail());
    UserEntity user = userServiceImpl.findByEmail(userRequest.getEmail());
    final String jwt = jwtUtil.generateToken(userDetails);

    return ResponseEntity.ok(userMapper.toAuthenticationResponse(jwt, user));
  }
}
