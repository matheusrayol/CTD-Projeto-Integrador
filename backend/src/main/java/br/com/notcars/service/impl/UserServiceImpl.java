package br.com.notcars.service.impl;

import br.com.notcars.dto.user.UserRequest;
import br.com.notcars.exceptions.BadRequestException;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.UserMapper;
import br.com.notcars.model.FunctionEntity;
import br.com.notcars.model.UserEntity;
import br.com.notcars.repository.UserRepository;
import br.com.notcars.service.FunctionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserDetailsService {

  private final UserRepository userRepository;

  private final UserMapper userMapper;

  private final FunctionService functionServiceImpl;

  private final BCryptPasswordEncoder passwordEncoder;

  @Override
  public UserDetails loadUserByUsername(String email) {
    return userRepository.findByEmail(email).orElseThrow(() -> new NotFoundException("Usuário não encontrado"));
  }

  public UserEntity create(UserRequest userRequest) {
    validatedIfEmailIsRegistered(userRequest.getEmail());
    FunctionEntity function = functionServiceImpl.findById(userRequest.getFunctionId());
    UserEntity userEntity = userMapper.toUserEntity(userRequest, function);
    String password = passwordEncoder.encode(userEntity.getPassword());
    userEntity.setPassword(password);

    return userRepository.save(userEntity);
  }


  private void validatedIfEmailIsRegistered(String email) {
    if (userRepository.findByEmail(email).isPresent()) {
      throw new BadRequestException("Email já cadastrado");
    }

  }
}
