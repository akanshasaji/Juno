import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import '../style/Jobs.css';
import Card from 'react-bootstrap/Card';

function Job() {
    const[jobs, setJobs] = useState(null);

    useEffect(()=>{
        axios.get('/jobs').then(response=>{
            setJobs(response.data);
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
         <h1>JOBS</h1><br/><br/>
         <div className="jobs">
             <Container>
                 <Row>
             {jobs && 
               jobs.map((job,id) => {
                   return (
                       <div classname="school" key={id}>
                        <Col xs={12} md={6}>
                            <Card style={{ width: '18rem' }} className="card1">
                                <Card.Body className="ct1">
                                <Card.Title >{job.title}</Card.Title>
                                <Card.Title >{job.company}</Card.Title>
                                <Card.Text>
                                    Source - {job.source} <br/>
                                    Pay - {job.pay} <br/>
                                    Offer - {job.offer} <br/>
                                    {job.votes} votes
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

export default Job;