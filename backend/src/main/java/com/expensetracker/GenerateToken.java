package com.expensetracker;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;

public class GenerateToken {
    public static void main(String[] args) {
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256); // Generates a secret key
        String key = java.util.Base64.getEncoder().encodeToString(secretKey.getEncoded());
        System.out.println("Generated key: " + key);

        String decodedKey = new String(java.util.Base64.getDecoder().decode(key));
        System.out.println("Decoded key: " + decodedKey);
    }
}
