import React, { useState } from 'react';
import { Button, Row, Col, Container,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const createUser =(event)=>{
        event.preventDefault();
        createUserWithEmailAndPassword(getAuth(),email,password).then(res=>{
            alert("user have been created successfuly")
        }).catch(e=>{
            alert(`error has occured ${e}`)
        })
    }
  return (
        <Container>
            <Row>
                <Col md={6} className="signup_form--container">
                    <Form style={{ width: "100%"}}>
                        <h1>Create an account</h1>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" onClick={e=>createUser(e)}>SignUp</Button>
                        </Form.Group>
                        <p>
                            Don't have an account?<Link to="/signup">Create account</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container"></Col>
            </Row>

        </Container>
  )
}

export default Signup