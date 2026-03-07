package com.example.myproject.repository;

import com.example.myproject.entity.HealthRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

/**
 * HealthRecord Repository - Data Access Layer
 */
@Repository
public interface HealthRecordRepository extends JpaRepository<HealthRecord, Long> {

    List<HealthRecord> findByPatientNameIgnoreCase(String patientName);

    List<HealthRecord> findByBloodType(String bloodType);

    List<HealthRecord> findByMedicalCondition(String medicalCondition);

    List<HealthRecord> findByRecordDateAfter(LocalDate date);

    List<HealthRecord> findByRecordDateBefore(LocalDate date);

    List<HealthRecord> findByRecordDateBetween(LocalDate startDate, LocalDate endDate);

    List<HealthRecord> findByDoctorName(String doctorName);

    @Query("SELECT h FROM HealthRecord h WHERE h.systolicBP >= 140 OR h.diastolicBP >= 90")
    List<HealthRecord> findHighBloodPressureRecords();

    @Query("SELECT h FROM HealthRecord h WHERE h.heartRate > 100")
    List<HealthRecord> findElevatedHeartRateRecords();

    @Query("SELECT h FROM HealthRecord h WHERE LOWER(h.patientName) LIKE LOWER(CONCAT('%', :patientName, '%')) " +
           "AND h.recordDate BETWEEN :startDate AND :endDate")
    List<HealthRecord> findByPatientNameAndDateRange(
        @Param("patientName") String patientName,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );

    List<HealthRecord> findByDoctorNameAndMedicalCondition(String doctorName, String medicalCondition);

    boolean existsByPatientNameAndRecordDate(String patientName, LocalDate recordDate);
}

