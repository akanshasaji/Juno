
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import '../style/Home.css';
import Card from 'react-bootstrap/Card'
import Health from './Healthcare.js';
import Edu from './Education.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Home extends Component{
    render()
    {
        return (          

            
      <Container fluid className="cont">
        <Row >
          <Col xs={3} md={4}><h1> JUNO</h1></Col>
          </Row>
          <Row>
          <Col xs={6} md={10}>
          <h2>JOIN THE TRANS REVOLUTION</h2></Col>
        </Row>
        <Row>
          <Col xs={8} className="descrip">
          It's time to open those special wings of yours and win the world trans sisters. You are smarter than they think, tougher than they know and prettier than they can see. Go ahead, fulfil your dreams, achieve your goals and bring the change now no one can stop you. </Col>
        </Row>       
        <Row>
            <Col xs={12} md={4}>
            <Card style={{ width: '18rem' }} className="card1">
            <Card.Body className="ct1">
            <Card.Title ><a href="./healthcare">HEALTH </a> </Card.Title>
            <Card.Text>
            Break those chains and open up your heart to a community full of like-minded people.
            </Card.Text>

    </Card.Body>
    </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card style={{ width: '18rem' }} className="card2">
 
    <Card.Body className="ct2">
      <Card.Title><a href="/education" onClick={this.props.fetchData}>EDUCATION </a> </Card.Title>
    <Card.Text>
    Buckle up its time for school, its time to show this world wisdom evident in your face.

    </Card.Text>
    </Card.Body>
    </Card>
            </Col>   
            <Col xs={12} md={4}>
            <Card style={{ width: '18rem' }} className="card3">
            <Card.Body className="ct3">
            <Card.Title > <a href="./jobs">JOBS </a> </Card.Title>
            <Card.Text>
            Feeling unwell?  Dont be afraid, visit a verified hospital near you and get the best medical care
            </Card.Text>
            </Card.Body>
           </Card>
            </Col>        
        </Row>

       </Container>
      
        )
    }
}

export default Home;