import { upload } from '@testing-library/user-event/dist/upload';
import React from 'react'
import { Button, Row, Col, Container,Form } from 'react-bootstrap';
import { BsFillCloudUploadFill } from 'react-icons/bs';

const Upload = () => {
    return ( 
        <Container>
            <Row>
                <Col md={6} className="login_form--container">
                    <Form style={{ width: "100%"}}>
                        <h1>Upload Your Study materials</h1>
                        <Form.Group>
                            <Form.Label>Name of the Course</Form.Label>
                            <Form.Control type="name" placeholder="Course Name"  />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Course Type</Form.Label>
                            <Form.Control type="code" placeholder="Course Code" />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit">Choose file</Button>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit">Upload </Button>
                        </Form.Group>
                        
                    </Form>
                </Col>
                <Col md={6} className="login__image--container"></Col>
            </Row>

        </Container>  
  )
}
export default Upload
