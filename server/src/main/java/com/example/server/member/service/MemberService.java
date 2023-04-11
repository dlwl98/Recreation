package com.example.server.member.service;

import com.example.server.member.model.Member;
import com.example.server.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public void signUp(Member member) {
        if (memberRepository.findByUsername(member.getUsername()).isPresent()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }

        memberRepository.save(member);
    }
}