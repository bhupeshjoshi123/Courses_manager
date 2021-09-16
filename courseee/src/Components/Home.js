import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { Button } from "reactstrap";
import Course from "./Course";
const Home = () =>( 

<div>
<Jumbotron className = "text-center">
    <h1>Learn the Courses</h1>
    <p>This site is made for learning  spring boot and react.js integration</p>
    <Container >
        <Button >
            Get started
        </Button>
    </Container>
    
</Jumbotron>
</div>



)

export default Home;