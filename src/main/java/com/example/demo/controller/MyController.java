package com.example.demo.controller;

import com.example.demo.entities.Course;
import com.example.demo.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//user requests

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class MyController {
    @Autowired
    private CourseService courseService;

    //get courses
    @GetMapping("/courses")
    public List<Course> getCourses(){
        return this.courseService.getCourses();
    }
    //get course with id

    @GetMapping("/courses/{courseId}")
    public Course getCourse(@PathVariable String courseId){
        return this.courseService.getCourse(Long.parseLong(courseId));
    }
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
        return this.courseService.addCourse(course);
    }

    @PutMapping("/courses/{courseID}")
    public Course updateCourse(@RequestBody Course course){
        return this.courseService.updateCourse(course);
    }
    @DeleteMapping("/courses/{courseID}")
    public ResponseEntity<HttpRequest> deleteCourse(@PathVariable String courseID){

        try {
            this.courseService.deleteCourse(Long.parseLong(courseID));
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

}
