import React, { useState } from 'react'
import { Button, Row, Col, Container,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signInUser = (event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(getAuth(),email,password).then(res=>{
             alert("user signed successfully")
        }).catch(e=>{
            alert(`Error occured ${e} `)
        })
    }
    return ( 
        <Container>
            <Row>
                <Col md={6} className="login_form--container">
                    <Form style={{ width: "100%"}}>
                        <h1>Login to your account</h1>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" onClick={e=>signInUser(e)}>Login</Button>
                        </Form.Group>
                        <p>
                            Don't have an account?<Link to="/Signup">Create account</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="login__image--container"></Col>
            </Row>

        </Container>  
  );
}
export default Login;