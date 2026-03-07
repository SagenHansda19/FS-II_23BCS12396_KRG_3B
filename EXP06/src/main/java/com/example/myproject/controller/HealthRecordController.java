package com.example.myproject.controller;

import com.example.myproject.dto.HealthRecordDTO;
import com.example.myproject.service.HealthRecordService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * HealthRecord REST Controller
 */
@RestController
@RequestMapping("/api/health-records")
@RequiredArgsConstructor
public class HealthRecordController {

    private final HealthRecordService healthRecordService;

    @PostMapping
    public ResponseEntity<HealthRecordDTO> createHealthRecord(@Valid @RequestBody HealthRecordDTO dto) {
        HealthRecordDTO created = healthRecordService.createHealthRecord(dto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<HealthRecordDTO>> getAllHealthRecords() {
        List<HealthRecordDTO> records = healthRecordService.getAllHealthRecords();
        return ResponseEntity.ok(records);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HealthRecordDTO> getHealthRecordById(@PathVariable Long id) {
        HealthRecordDTO record = healthRecordService.getHealthRecordById(id);
        return ResponseEntity.ok(record);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HealthRecordDTO> updateHealthRecord(
            @PathVariable Long id,
            @Valid @RequestBody HealthRecordDTO dto) {
        HealthRecordDTO updated = healthRecordService.updateHealthRecord(id, dto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteHealthRecord(@PathVariable Long id) {
        healthRecordService.deleteHealthRecord(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Health record with ID " + id + " deleted successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/search/patient")
    public ResponseEntity<List<HealthRecordDTO>> searchByPatientName(@RequestParam String patientName) {
        List<HealthRecordDTO> records = healthRecordService.getHealthRecordsByPatientName(patientName);
        return ResponseEntity.ok(records);
    }

    @GetMapping("/search/blood-type")
    public ResponseEntity<List<HealthRecordDTO>> searchByBloodType(@RequestParam String bloodType) {
        List<HealthRecordDTO> records = healthRecordService.getHealthRecordsByBloodType(bloodType);
        return ResponseEntity.ok(records);
    }

    @GetMapping("/search/condition")
    public ResponseEntity<List<HealthRecordDTO>> searchByMedicalCondition(@RequestParam String condition) {
        List<HealthRecordDTO> records = healthRecordService.getHealthRecordsByMedicalCondition(condition);
        return ResponseEntity.ok(records);
    }

    @GetMapping("/search/date-range")
    public ResponseEntity<List<HealthRecordDTO>> searchByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        List<HealthRecordDTO> records = healthRecordService.getHealthRecordsByDateRange(startDate, endDate);
        return ResponseEntity.ok(records);
    }

    @GetMapping("/search/high-blood-pressure")
    public ResponseEntity<List<HealthRecordDTO>> getHighBloodPressureRecords() {
        List<HealthRecordDTO> records = healthRecordService.getHighBloodPressureRecords();
        return ResponseEntity.ok(records);
    }

    @GetMapping("/search/elevated-heart-rate")
    public ResponseEntity<List<HealthRecordDTO>> getElevatedHeartRateRecords() {
        List<HealthRecordDTO> records = healthRecordService.getElevatedHeartRateRecords();
        return ResponseEntity.ok(records);
    }

    @GetMapping("/search/patient-and-date")
    public ResponseEntity<List<HealthRecordDTO>> searchByPatientAndDateRange(
            @RequestParam String patientName,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        List<HealthRecordDTO> records = healthRecordService.getRecordsByPatientAndDateRange(patientName, startDate, endDate);
        return ResponseEntity.ok(records);
    }

    @GetMapping("/search/doctor-and-condition")
    public ResponseEntity<List<HealthRecordDTO>> searchByDoctorAndCondition(
            @RequestParam String doctorName,
            @RequestParam String condition) {
        List<HealthRecordDTO> records = healthRecordService.getRecordsByDoctorAndCondition(doctorName, condition);
        return ResponseEntity.ok(records);
    }

    @GetMapping("/statistics")
    public ResponseEntity<Map<String, Object>> getStatistics() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalRecords", healthRecordService.getTotalRecordsCount());
        stats.put("highBloodPressureCount", healthRecordService.getHighBloodPressureRecords().size());
        stats.put("elevatedHeartRateCount", healthRecordService.getElevatedHeartRateRecords().size());
        return ResponseEntity.ok(stats);
    }
}

