package com.example.demo.services;

import com.example.demo.dao.CourseDao;
import com.example.demo.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    CourseDao courseDao;

   // private List<Course> courseListing = new ArrayList<>();



    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {

//        for(Course c: courseListing){
//            if(c.getId() == courseId){
//                return c;
//            }
//        }
        return courseDao.findById(courseId).get();

    }

    @Override
    public Course addCourse(Course course) {
//        courseListing.add(course);
         courseDao.save(course);
         return course;
    }

    @Override
    public Course updateCourse(Course course) {

//        for(Course c : courseListing){
//            if(c.getId() == course.getId()){
//                c.setTitle(course.getTitle());
//                c.setDescription(course.getDescription());
                courseDao.save(course);
                return course;

            }



    @Override
    public void deleteCourse(long courseId) {
        Course course = courseDao.getById(courseId);
        courseDao.delete(course);

        //courseListing = this.courseListing.stream().filter(c -> c.getId() != courseId).collect(Collectors.toList());
    }


}
