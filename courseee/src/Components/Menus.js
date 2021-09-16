import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, ListGroup } from "reactstrap";
import { Button } from "reactstrap";
import Course from "./Course";
const Menus = () =>( 

    <ListGroup>
<Link className = "list-group-item list-group-item-action" to="/">Home</Link>
<Link className = "list-group-item list-group-item-action" to="/add-course">Add Course</Link>
<Link className = "list-group-item list-group-item-action" to="/view-courses">View Courses</Link>
<Link className = "list-group-item list-group-item-action" to="#">About</Link>
    </ListGroup>


    



)

export default Menus;