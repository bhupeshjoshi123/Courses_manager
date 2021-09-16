import axios from "axios";
import React, { useEffect,useState } from "react";
import { toast } from "react-toastify";
import base_url from "../api/bootapplication";
import Course from "./Course";

const Allcorse=()=>{
    const [courses,setCourses] = useState([]);

    useEffect(() => {
        getAllCoursesFromServer();
        }
    , [])
   
    const updatecourses = (id) =>{
        setCourses(courses.filter((c)=>id != c.id));
   }
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (resp)=>{
                console.log(resp);
                toast.success("Courses has been loaded",{position:"buttom-center"});
                setCourses(resp.data);
            },
            (error)=>{
                console.log(error);
                toast.success("Something went wrong");

            }
        )
    }
    return(
        courses.length>0?courses.map(c => <Course key = {c.id} course = {c} update = {updatecourses}/>):"No courses found"
        )
}

export default Allcorse;