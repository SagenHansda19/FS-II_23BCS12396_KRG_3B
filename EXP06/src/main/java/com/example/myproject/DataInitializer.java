package com.example.myproject;

import com.example.myproject.entity.HealthRecord;
import com.example.myproject.repository.HealthRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

/**
 * Sample Data Initialization
 * Loads sample health records when the application starts
 */
@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final HealthRecordRepository healthRecordRepository;

    @Bean
    public CommandLineRunner loadData() {
        return args -> {
            if (healthRecordRepository.count() > 0) {
                return;
            }

            HealthRecord record1 = new HealthRecord();
            record1.setPatientName("John Doe");
            record1.setAge(45);
            record1.setGender("Male");
            record1.setBloodType("O+");
            record1.setHeight(178.5);
            record1.setWeight(78.0);
            record1.setSystolicBP(135.0);
            record1.setDiastolicBP(88.0);
            record1.setHeartRate(75.0);
            record1.setMedicalCondition("Hypertension");
            record1.setCurrentMedication("Lisinopril 10mg daily");
            record1.setRecordDate(LocalDate.of(2024, 3, 1));
            record1.setNotes("Regular checkup. Blood pressure slightly elevated.");
            record1.setDoctorName("Dr. Sarah Smith");

            HealthRecord record2 = new HealthRecord();
            record2.setPatientName("Jane Smith");
            record2.setAge(32);
            record2.setGender("Female");
            record2.setBloodType("A+");
            record2.setHeight(165.0);
            record2.setWeight(62.0);
            record2.setSystolicBP(118.0);
            record2.setDiastolicBP(76.0);
            record2.setHeartRate(68.0);
            record2.setMedicalCondition("Healthy");
            record2.setCurrentMedication("None");
            record2.setRecordDate(LocalDate.of(2024, 3, 2));
            record2.setNotes("Annual checkup. All vitals normal.");
            record2.setDoctorName("Dr. Michael Johnson");

            HealthRecord record3 = new HealthRecord();
            record3.setPatientName("Robert Brown");
            record3.setAge(58);
            record3.setGender("Male");
            record3.setBloodType("B-");
            record3.setHeight(175.0);
            record3.setWeight(85.0);
            record3.setSystolicBP(148.0);
            record3.setDiastolicBP(95.0);
            record3.setHeartRate(82.0);
            record3.setMedicalCondition("Type 2 Diabetes");
            record3.setCurrentMedication("Metformin 1000mg twice daily, Atorvastatin 20mg");
            record3.setRecordDate(LocalDate.of(2024, 3, 3));
            record3.setNotes("Quarterly diabetes checkup. Blood pressure needs management.");
            record3.setDoctorName("Dr. Emily Davis");

            HealthRecord record4 = new HealthRecord();
            record4.setPatientName("Emily Wilson");
            record4.setAge(28);
            record4.setGender("Female");
            record4.setBloodType("AB+");
            record4.setHeight(170.0);
            record4.setWeight(64.0);
            record4.setSystolicBP(116.0);
            record4.setDiastolicBP(74.0);
            record4.setHeartRate(65.0);
            record4.setMedicalCondition("Healthy");
            record4.setCurrentMedication("Prenatal vitamins");
            record4.setRecordDate(LocalDate.of(2024, 3, 4));
            record4.setNotes("Pregnancy checkup. 16 weeks. All normal.");
            record4.setDoctorName("Dr. Jennifer Martinez");

            HealthRecord record5 = new HealthRecord();
            record5.setPatientName("David Lee");
            record5.setAge(67);
            record5.setGender("Male");
            record5.setBloodType("O-");
            record5.setHeight(172.0);
            record5.setWeight(72.0);
            record5.setSystolicBP(142.0);
            record5.setDiastolicBP(92.0);
            record5.setHeartRate(78.0);
            record5.setMedicalCondition("Coronary Artery Disease");
            record5.setCurrentMedication("Aspirin 100mg, Metoprolol 50mg, Simvastatin 40mg");
            record5.setRecordDate(LocalDate.of(2024, 3, 5));
            record5.setNotes("Post-cardiac event follow-up. Stable condition.");
            record5.setDoctorName("Dr. Robert Taylor");

            HealthRecord record6 = new HealthRecord();
            record6.setPatientName("Lisa Anderson");
            record6.setAge(41);
            record6.setGender("Female");
            record6.setBloodType("A-");
            record6.setHeight(163.0);
            record6.setWeight(68.0);
            record6.setSystolicBP(128.0);
            record6.setDiastolicBP(84.0);
            record6.setHeartRate(72.0);
            record6.setMedicalCondition("Thyroid disorder");
            record6.setCurrentMedication("Levothyroxine 75mcg daily");
            record6.setRecordDate(LocalDate.of(2024, 3, 6));
            record6.setNotes("Thyroid function test done. TSH levels normal.");
            record6.setDoctorName("Dr. Linda Garcia");

            HealthRecord record7 = new HealthRecord();
            record7.setPatientName("Michael Chen");
            record7.setAge(35);
            record7.setGender("Male");
            record7.setBloodType("B+");
            record7.setHeight(182.0);
            record7.setWeight(76.0);
            record7.setSystolicBP(122.0);
            record7.setDiastolicBP(78.0);
            record7.setHeartRate(70.0);
            record7.setMedicalCondition("High cholesterol");
            record7.setCurrentMedication("Atorvastatin 20mg daily");
            record7.setRecordDate(LocalDate.of(2024, 3, 7));
            record7.setNotes("Lipid panel done. Cholesterol levels improving.");
            record7.setDoctorName("Dr. William Rodriguez");

            healthRecordRepository.save(record1);
            healthRecordRepository.save(record2);
            healthRecordRepository.save(record3);
            healthRecordRepository.save(record4);
            healthRecordRepository.save(record5);
            healthRecordRepository.save(record6);
            healthRecordRepository.save(record7);

            System.out.println("\n========================================");
            System.out.println("Sample Health Records Loaded Successfully!");
            System.out.println("Total Records: " + healthRecordRepository.count());
            System.out.println("========================================\n");
        };
    }
}

