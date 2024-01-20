package com.shebudgetsavvy.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController


public class RegisterController {

    @RequestMapping("/register")
    public String register(){
         return "Hii";
    }
}
