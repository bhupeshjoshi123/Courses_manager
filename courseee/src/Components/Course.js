import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import base_url from "../api/bootapplication";
import AddCourse from "./AddCourse";
import { useHistory } from "react-router";

const Course = ({course,update}) =>{

    const history  = useHistory();
const deleteReuestToServer = (id)=>{
 axios.delete(`${base_url}/courses/${id}`).then(
     (resp)=>{
        toast.success("The course deleted successfully");
        update(id);
     },
    (error)=>{
        toast.error("Something went wrong");
    }
 )
}


return(
<Card>
<CardBody >
    <CardSubtitle classnName ="font-weight-bold">{course.title}</CardSubtitle>
    <CardText>{course.description}</CardText>
    <Container className = "text-center">
        <Button color = "danger" onClick = {()=>deleteReuestToServer(course.id)} >Remove</Button>
       <Link to = {`/update-course/${course.id}`}><Button color ="warning">Update</Button></Link>
    </Container>
</CardBody>
</Card>
)
}

export default Course;