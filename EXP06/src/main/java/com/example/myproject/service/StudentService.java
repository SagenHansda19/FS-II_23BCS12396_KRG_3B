package com.example.myproject.service;

import com.example.myproject.dto.StudentDTO;
import com.example.myproject.entity.Student;

import java.util.List;

public interface StudentService {
    Student createStudent(StudentDTO dto);
    List<Student> getAllStudents();
}

