package com.example.server.security.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberRequestDto {
    private Long id;
    private String username;
    private String password;
    private String email;
}
