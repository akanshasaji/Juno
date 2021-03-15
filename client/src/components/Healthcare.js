import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import '../style/Healthcare.css';
import Card from 'react-bootstrap/Card';


function Health() {
    const[clinics, setClinics] = useState(null);
    useEffect(()=>{
        axios.get('/healthcare').then(response=>{
            setClinics(response.data);
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
         <h1>HEALTHCARE</h1><br/><br/>
         <div className="clincs">
             <Container>
                 <Row>
             {clinics && 
               clinics.map((clinic,id) => {
                   return (
                       <div classname="school" key={id}>
                        <Col xs={12} md={6}>
                            <Card style={{ width: '18rem' }} className="card1">
                                <Card.Body className="ct1">
                                <Card.Title >{clinic.name}</Card.Title>
                                <Card.Text>
                                    Address - {clinic.address} <br/>
                                    Contact Info - {clinic.contactinfo} <br/>
                                    Timings - {clinic.timings} <br/>
                                    {clinic.votes} votes
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

export default Health;