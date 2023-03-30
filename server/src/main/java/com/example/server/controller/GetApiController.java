package com.example.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GetApiController {

    // http://localhost:8080/api/hello
    @GetMapping(path = "/hello")
    public String Hello(){
        return "get Hello";
    }
}
