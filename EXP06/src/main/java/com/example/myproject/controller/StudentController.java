package com.example.myproject.controller;

import com.example.myproject.dto.StudentDTO;
import com.example.myproject.entity.Student;
import com.example.myproject.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(@Valid @RequestBody StudentDTO dto) {
        Student student = service.createStudent(dto);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Student> getAll() {
        return service.getAllStudents();
    }
}

