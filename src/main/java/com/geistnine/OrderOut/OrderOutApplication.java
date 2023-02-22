package com.geistnine.OrderOut;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Controller
public class OrderOutApplication {

  @GetMapping("/resource")
  @ResponseBody
  public Map<String, Object> home() {
    Map<String, Object> model = new HashMap<String, Object>();
    model.put("id", UUID.randomUUID().toString());
    model.put("content", "Hello World");
    return model;
  }

	public static void main(String[] args) {
		SpringApplication.run(OrderOutApplication.class, args);
	}

}
