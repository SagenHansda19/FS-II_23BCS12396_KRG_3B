package com.example.controller;

import com.example.model.Patient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

// REST Controller for Patient resource
@RestController
@RequestMapping("/patients")
public class PatientController {

    // GET endpoint - returns hard-coded list of 3 patients
    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        // Create hard-coded list of patients
        List<Patient> patients = new ArrayList<>();
        patients.add(new Patient(1, "A", 45));
        patients.add(new Patient(2, "B", 40));
        patients.add(new Patient(3, "C", 30));

        // Return list with HTTP 200 OK status
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    // POST endpoint - accepts patient JSON and prints to console
    @PostMapping
    public ResponseEntity<String> createPatient(@RequestBody Patient patient) {
        // Print patient data to console
        System.out.println("New Patient Created: " + patient);

        // Return success message with HTTP 201 CREATED status
        return new ResponseEntity<>("Patient added successfully: " + patient.getName(), 
                HttpStatus.CREATED);
    }
}
