package com.example.demo.services;

import com.example.demo.entities.Course;

import java.util.List;

public interface CourseService {
    List<Course> getCourses();

    Course getCourse(long courseId);

    Course addCourse(Course course);

    Course updateCourse(Course course);

    void deleteCourse(long courseId);
}
