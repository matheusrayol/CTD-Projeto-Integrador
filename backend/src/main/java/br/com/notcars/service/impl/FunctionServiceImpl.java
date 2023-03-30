package br.com.notcars.service.impl;

import br.com.notcars.config.aspect.LogInfo;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.model.FunctionEntity;
import br.com.notcars.repository.FunctionRepository;
import br.com.notcars.service.FunctionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FunctionServiceImpl implements FunctionService {

  private final FunctionRepository functionRepository;

  @LogInfo
  @Override
  public FunctionEntity findById(Long id) {
    return functionRepository.findById(id).orElseThrow(() -> new NotFoundException("function not found"));
  }
}
