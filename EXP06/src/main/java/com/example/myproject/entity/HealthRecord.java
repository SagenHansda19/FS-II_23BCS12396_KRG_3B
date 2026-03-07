package com.example.myproject.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

/**
 * HealthRecord Entity - Represents patient health records
 */
@Entity
@Table(name = "health_records")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HealthRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Patient name cannot be blank")
    @Size(min = 2, max = 100, message = "Patient name must be between 2 and 100 characters")
    private String patientName;

    @NotNull(message = "Age cannot be null")
    @Min(value = 0, message = "Age must be a positive number")
    @Max(value = 150, message = "Age must be less than 150")
    private Integer age;

    @NotBlank(message = "Gender cannot be blank")
    @Pattern(regexp = "Male|Female|Other", message = "Gender must be Male, Female, or Other")
    private String gender;

    @NotBlank(message = "Blood type cannot be blank")
    @Pattern(regexp = "O\\+|O\\-|A\\+|A\\-|B\\+|B\\-|AB\\+|AB\\-", message = "Invalid blood type")
    private String bloodType;

    @DecimalMin(value = "30.0", message = "Height must be at least 30 cm")
    @DecimalMax(value = "300.0", message = "Height must not exceed 300 cm")
    private Double height;

    @DecimalMin(value = "5.0", message = "Weight must be at least 5 kg")
    @DecimalMax(value = "500.0", message = "Weight must not exceed 500 kg")
    private Double weight;

    @DecimalMin(value = "30.0", message = "Systolic BP must be at least 30")
    @DecimalMax(value = "300.0", message = "Systolic BP must not exceed 300")
    private Double systolicBP;

    @DecimalMin(value = "20.0", message = "Diastolic BP must be at least 20")
    @DecimalMax(value = "200.0", message = "Diastolic BP must not exceed 200")
    private Double diastolicBP;

    @DecimalMin(value = "30.0", message = "Heart rate must be at least 30 bpm")
    @DecimalMax(value = "200.0", message = "Heart rate must not exceed 200 bpm")
    private Double heartRate;

    @NotBlank(message = "Medical condition cannot be blank")
    private String medicalCondition;

    @NotBlank(message = "Current medication cannot be blank")
    private String currentMedication;

    @NotNull(message = "Record date cannot be null")
    private LocalDate recordDate;

    @Column(length = 500)
    private String notes;

    @NotBlank(message = "Doctor's name cannot be blank")
    private String doctorName;

    @Transient
    public Double calculateBMI() {
        if (height != null && weight != null && height > 0) {
            double heightInMeters = height / 100.0;
            return weight / (heightInMeters * heightInMeters);
        }
        return null;
    }
}

