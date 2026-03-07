package com.example.myproject.exception;

/**
 * Custom exception for resource not found scenarios
 */
public class HealthRecordNotFoundException extends RuntimeException {

    public HealthRecordNotFoundException(Long id) {
        super("Health record with ID " + id + " not found");
    }

    public HealthRecordNotFoundException(String message) {
        super(message);
    }

    public HealthRecordNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

