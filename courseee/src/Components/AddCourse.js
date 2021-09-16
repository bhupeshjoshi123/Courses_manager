import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapplication";
import Course from "./Course";
import { useHistory } from "react-router";
const AddCourse=({courseToUpdate})=>{

const [course,setCourse] = useState({});
const history = useHistory();

const handlesubmit=(e)=>{
    postDataToServer(course);

    e.preventDefault();
    
    setCourse({});
}

//post to server

const postDataToServer=(data)=>{

axios.post(`${base_url}/courses`,data).then(
    (resp)=>{
        toast.success("course added sccessfuly");
        console.log(resp);
        history.push("./view-courses");

},
(error)=>{
toast.error("Something went wrong")
console.log(error);
})
}


    return (
        <>
        <Form onSubmit = {handlesubmit}>
            <h1 className = "text-center my-3">Fill detail of Course</h1>
            <FormGroup>
                <Label for = "userId">Course Id</Label>
                <Input type = "text"
                 placeholder = "enter Id"
                  name = "userId" 
                  id = "userId"
                  onChange ={(e)=>{
                      setCourse({...course,id:e.target.value});
                    }}
                  ></Input>
            </FormGroup>
            <FormGroup>
                <Label for = "title">Course Title</Label>
                <Input type = "text" placeholder = "enter title"  id = "title"                 
                  onChange ={(e)=>{setCourse({...course,title:e.target.value});
                  }}
                ></Input>
            </FormGroup>
            <FormGroup>

                <Label for = "description">Course Description</Label>
                <Input type = "textarea" 
                placeholder = "enter description"  
                id = "description"
                onChange ={(e)=>{
                    setCourse({...course,description:e.target.value});
            }}
                 ></Input>

            </FormGroup>
            <Container className = "text-center">

                <Button type = "submit" color = "success">Add Course</Button>
                <Button type="reset"color = "warning ml-2" >Clear</Button>
                
             </Container>
        </Form>
        </>

    )
}
export default AddCourse;