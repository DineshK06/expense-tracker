package com.expensetracker.security;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class JwtScheduler {

    private final JwtUtil jwtUtil;

    public JwtScheduler(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Scheduled(fixedRate = 86400000)
    public void rotateJwtKey() {
        jwtUtil.rotateKey();
        System.out.println("JWT Secret Key Rotated Successfully");
    }
}
