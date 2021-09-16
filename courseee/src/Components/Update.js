import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapplication";
import Course from "./Course";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";


const Update=()=>{

const [course,setCourse] = useState({});
const {id , title, description} = course;
const history = useHistory();
const {ide}  = useParams();
useEffect(() => {
    getcourse();

}, [])

const getcourse = async ()=>{
   
    const response  = await axios.get(`${base_url}/courses/${ide}`);
    setCourse(response.data);
    
   
}

const handlesubmit=(e)=>{
    updateDataToServer();
    history.push("./view-courses");

    e.preventDefault();
}

//update to server

const updateDataToServer=async ()=>{
try{
 await axios.put(`${base_url}/courses/${ide}`,course);
    toast.success("Successfully updated");
}
catch(error){
    console.log(error);
}
}
const onValueChange=(e)=>
{
setCourse({...course,[e.target.name] : e.target.value});
}


    return (
        <>
        <Form onSubmit = {handlesubmit}>
            <h1 className = "text-center my-3">Edit course details</h1>
            <FormGroup>
                <Label for = "userId">Course Id</Label>
                <Input type = "text"
                 placeholder = "enter Id"
                  name = "userId" 
                  id = "userId"
                  value = {id}
                  onChange={(e)=>onValueChange(e)}
                  ></Input>
            </FormGroup>
            <FormGroup>
                <Label for = "title">Course Title</Label>
                <Input type = "text" placeholder = "enter title"  id = "title" name ="title" value = {title}               
                  onChange= {(e)=>onValueChange(e)}
                ></Input>
            </FormGroup>
            <FormGroup>

                <Label for = "description">Course Description</Label>
                <Input type = "textarea" 
                placeholder = "enter description"  
                id = "description"
                name="description"
                value = {description}
                onChange ={(e)=>onValueChange(e)}
                 ></Input>

            </FormGroup>
            <Container className = "text-center">

                <Button type = "submit" color = "success">Update Course</Button>
                <Button type="reset"color = "warning ml-2" >Clear</Button>
                
             </Container>
        </Form>
        </>

    )
}
export default Update;