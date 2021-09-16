import logo from './logo.svg';
import './App.css';
import { Card, Col, Container, Row } from 'reactstrap';
import Course from './Components/Course';
import Menus from './Components/Menus';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import AddCourse from './Components/AddCourse';
import Allcorse from './Components/AllCourses';
import Update from './Components/Update';
import { Route } from 'react-router';
import Home from './Components/Home';
function App() {
  return (
    <>
    <ToastContainer
    autoClose = {200}
    pauseOnHover
    closeOnClick
    position="bottom-right"
    draggable
    
    />
   <Container>
     <Header/>
   
   <Row>
  <Col md ={4}>
  <Menus></Menus>
  </Col>
  <Col md = {8}>
  
  <Route path ="/" component = {Home} exact/>

    <Route path ="/add-course" component = {AddCourse} exact/>
    <Route path ="/view-courses" component = {Allcorse} exact/>
    <Route path ="/update-course/:ide" component = {Update} exact/>

  </Col>
   </Row>
   </Container>
     </>
  );
}

export default App;
