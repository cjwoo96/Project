package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.example.demo.controller"))
				// 패키지 안의 컨트롤러 대상으로 API 문성화를 제한.-> 안에 경로를 안 정하면????
				// 경로를 안 정하면 지정된 패키지의 모든 컨트롤러가 문서화 대상이 됨. 
				// Docket이 뭐야??
//				.paths(PathSelectors.ant("/api*/**")) 
				.build()
				.apiInfo(apiInfo());
	}
	
	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("SSAFY 10기 BOARD REST API")
				.description("엄청나게 대단한 게시판을 위한 레스트풀한 서버 입니다.")
				.version("0.1")
				.build();
	}
}

/* @Configuration 
   -> 스프링 설정을 위한 특별한 종류의 클래스를 만들기 위해 사용하는 어노테이션. -> 쉽게 말해서 이걸 달면 @Bean이라는 어노테이션을 단 객체를
   생성 할 수 있는데, 이는 스프링이 관리하는 객체로 애플리케이션 전체에서 딱 한번만 만들어짐. 또 어디서든 사용할 수 있음. 
   그럼 이게 왜 필요????
   1. 질서를 정리 -> 모든 설정을 한 군데에서 관리하니까, 여기만 보면 됨. 또 설정을 바꿀때 여기서 바꾸면 전체적으로 한번에 바뀜.
   2. 코드로 설정 -> 기존에는 이걸 XML파일로 관리. 이것보다 자바 코드로 설정하면 훨씬 보는 사람이 명확하게 이해. 
   
   
   
*/