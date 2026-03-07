package com.example.myproject.exception;

/**
 * Custom exception for invalid health record data
 */
public class InvalidHealthRecordException extends RuntimeException {

    public InvalidHealthRecordException(String message) {
        super(message);
    }

    public InvalidHealthRecordException(String message, Throwable cause) {
        super(message, cause);
    }
}

