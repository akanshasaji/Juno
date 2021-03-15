import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import '../style/Education.css';
import Card from 'react-bootstrap/Card';


function Edu() {
    const[schools, setSchools] = useState(null);

    useEffect(()=>{
        axios.get('/education').then(response=>{
            setSchools(response.data);
        }
        );
    })

    const mystyle = {
        color: "#FFE5E5 !important",
        backgroundColor: "#FFE5E5",
      };

    return (
        <div style={mystyle}>
        <br/>
         <h1>EDUCATION</h1><br/><br/>
         <div>
         </div>
         <div className="schools">
             <Container>
                 <Row>
             {schools && 
               schools.map((school,id) => {
                   return (
                       <div classname="school" key={id}>
                        <Col xs={12} md={6}>
                            <Card style={{ width: '18rem' }} className="card1">
                                <Card.Body className="ct1">
                                <Card.Title >{school.name}</Card.Title>
                                <Card.Text>
                                    Address - {school.address} <br/>
                                    Contact Info - {school.contactinfo} <br/>
                                    Timings - {school.timings} <br/>
                                    {school.votes} votes
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>                          
                           <br/>
                        </div>
                   );
               })
             }
            </Row>
             </Container>

         </div>

         </div>
    );
}


export default Edu;