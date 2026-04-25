package com.healthHub.config;

import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;

@Configuration
public class StripeConfig {

    @Value("${stripe.secret.key}")
    private String secretKey;

    @PostConstruct
    public void init() {
        if (StringUtils.hasText(secretKey)) {
            com.stripe.Stripe.apiKey = secretKey;
        }
    }
}
