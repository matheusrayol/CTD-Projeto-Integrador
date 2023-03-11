package br.com.notcars.aspect;


import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import lombok.SneakyThrows;
import lombok.extern.log4j.Log4j2;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Log4j2
public class LoggingAspect {

  @SneakyThrows
  @Around("@annotation(LogInfo)")
  public Object logMethodInfo(ProceedingJoinPoint joinPoint) {

    final MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
    String[] argNames = methodSignature.getParameterNames();
    Object[] argValues = joinPoint.getArgs();

    boolean logParameters = methodSignature.getMethod().getAnnotation(LogInfo.class).logParameters();

    final Map<String, Object> parameters = new ConcurrentHashMap<>();
    if (logParameters && argNames.length != 0) {
      for (int argIndex = 0; argIndex < argNames.length; argIndex++) {
        parameters.put(argNames[argIndex], String.valueOf(argValues[argIndex]));
      }
    }

    log.info("status=init, method={}.{}, logParameters={}, parameters={}",
      methodSignature.getDeclaringTypeName(),
      methodSignature.getName(),
      logParameters,
      parameters
    );

    Object result = joinPoint.proceed();

    log.info("status=finish, method={}.{}, logParameters={}, parameters={}",
      methodSignature.getDeclaringTypeName(),
      methodSignature.getName(),
      logParameters,
      parameters
    );

    return result;
  }
}