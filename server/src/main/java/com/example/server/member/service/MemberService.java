package com.example.server.member.service;

import com.example.server.member.model.Member;
import com.example.server.member.repository.MemberRepository;
import com.example.server.security.dto.MemberRequestDto;
import com.example.server.security.dto.MemberResponseDto;
import com.example.server.security.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public MemberResponseDto login(MemberRequestDto request) throws Exception {
        Member member = memberRepository.findByEmail(request.getEmail()).orElseThrow(() ->
                new BadCredentialsException("잘못된 계정정보입니다."));

        if (!passwordEncoder.matches(request.getPassword(), member.getPassword())) {
            throw new BadCredentialsException("잘못된 계정정보입니다.");
        }

        return MemberResponseDto.builder()
                .id(member.getId())
                .username(member.getUsername())
                .email(member.getEmail())
                .token(jwtTokenProvider.createToken(member.getEmail()))
                .build();

    }

    public boolean register(MemberRequestDto request) throws Exception {
        try {
            Member member = Member.builder()
                    .password(passwordEncoder.encode(request.getPassword()))
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .build();

            memberRepository.save(member);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new Exception("잘못된 요청입니다.");
        }
        return true;
    }

//    public MemberResponseDto getMember(String account) throws Exception {
//        Member member = memberRepository.findByEmail(account)
//                .orElseThrow(() -> new Exception("계정을 찾을 수 없습니다."));
//        return new MemberResponseDto(member);
//    }



}