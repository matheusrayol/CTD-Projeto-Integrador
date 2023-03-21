package br.com.notcars.controller;

import br.com.notcars.dto.user.AuthenticationResponse;
import br.com.notcars.util.JwtUtil;
import br.com.notcars.dto.user.UserRequest;
import br.com.notcars.dto.user.UserResponse;
import br.com.notcars.mapper.UserMapper;
import br.com.notcars.model.UserEntity;
import br.com.notcars.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
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
@RequestMapping("/user")
public class UserController {


  private final UserServiceImpl userServiceImpl;

  private final AuthenticationManager authenticationManager;

  private final JwtUtil jwtUtil;

  private final UserMapper userMapper;

  @PostMapping
  public ResponseEntity<UserResponse> create(@RequestBody UserRequest userRequest) {
    UserEntity user = userServiceImpl.create(userRequest);
    return ResponseEntity.status(HttpStatus.CREATED).body(userMapper.toUserResponse(user));
  }

  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> createAuthenticationToken(@RequestBody UserRequest userRequest) throws Exception {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userRequest.getEmail(), userRequest.getPassword()));
    } catch (BadCredentialsException e) {
      throw new Exception("Incorrect", e);
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
    final UserDetails userDetails = userServiceImpl.loadUserByUsername(userRequest.getEmail());
    final String jwt = jwtUtil.generateToken(userDetails);

    return ResponseEntity.ok(new AuthenticationResponse(jwt));
  }
}
