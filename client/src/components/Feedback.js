import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col, FormGroup} from 'react-bootstrap';
import '../style/Feedback.css';
import Card from 'react-bootstrap/Card'
import Health from './Healthcare.js';
import Edu from './Education.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


class Feedback extends Component {
    render(){
        const mystyle = {
            color:"white",
            backgroundColor:"##5BCEFA !important",
          };
        const mystyle2 = {
            backgroundColor:"#FFE5E5",
        }

        const mystyle3 = {
            backgroundColor: "white",
            "border-radius":"7px",
            height:"580px",
        }
        return(
            <div ><br/><br/><br/>
            <Container>
                    <Row xs={12} class="rightside" style={mystyle2}>
                        <Col xs={12} md={4}>
                        <Form>
                        <h3>HELP</h3>
                            <h2 className="fill">HEALTHCARE</h2>
                            <Form.Group>
                                <Form.Label>NAME OF CLINIC:</Form.Label>
                                <Form.Control type="text" name="name" className="e5"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>ADDRESS:</Form.Label>
                                <Form.Control type="text" name="address" className="e6"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CONTACT INFORMATION:</Form.Label>
                                <Form.Control type="text" name="contact" className="e5"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>TIMINGS:</Form.Label>
                                <Form.Control type="text" name="timings" className="e5"></Form.Control>
                            </Form.Group>
                            <Button type="submit">SUBMIT</Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form>
                            <h3>US</h3>
                            <h2 className="fill">EDUCATION</h2>
                            <Form.Group>
                                <Form.Label>NAME OF CLINIC:</Form.Label>
                                <Form.Control type="text" name="name" className="e5"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>ADDRESS:</Form.Label>
                                <Form.Control type="text" name="address" className="e6"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CONTACT INFORMATION:</Form.Label>
                                <Form.Control type="text" name="contact" className="e5"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>TIMINGS:</Form.Label>
                                <Form.Control type="text" name="timings" className="e5"></Form.Control>
                            </Form.Group>
                            <Button type="submit">SUBMIT</Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form>
                            <h3>GROW!</h3>
                            <h2 className="fill">EMPLOYMENT</h2>
                            <Form.Group>
                                <Form.Label>NAME OF CLINIC:</Form.Label>
                                <Form.Control type="text" name="name" className="e5"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>ADDRESS:</Form.Label>
                                <Form.Control type="text" name="address" className="e6"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CONTACT INFORMATION:</Form.Label>
                                <Form.Control type="text" name="contact" className="e5"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>TIMINGS:</Form.Label>
                                <Form.Control type="text" name="timings" className="e5"></Form.Control>
                            </Form.Group>
                            <Button type="submit">SUBMIT</Button>
                        </Form>
                    </Col>
                    </Row>
            </Container>
            </div>
        )
    }
}


export default Feedback;