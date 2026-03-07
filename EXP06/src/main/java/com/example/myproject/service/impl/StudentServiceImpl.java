package com.example.myproject.service.impl;

import com.example.myproject.dto.StudentDTO;
import com.example.myproject.entity.Student;
import com.example.myproject.repository.StudentRepository;
import com.example.myproject.service.StudentService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Student createStudent(StudentDTO dto) {
        Student student = new Student();
        student.setName(dto.getName());
        student.setCourse(dto.getCourse());
        student.setEmail(dto.getEmail());
        return repository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }
}

