import React, { useState } from "react";
import axios from 'axios';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const TodoAddComponent: React.FC = ()=>{

    const[todoTitle,setTodoTitle]=useState("");
    const[todoDescription,setTodoDescription]=useState("");
    const[todoStatus,setTodoStatus]=useState("");

    const nav=useNavigate();

    const sendData = async () => {
        const newDepartment = {
            "id": 0,
            "todoTitle": todoTitle,
            "todoDescription": todoDescription,
            "todoStatus":todoStatus
        };
        await axios.post("http://localhost:8087/api/todos", newDepartment);
        alert('data Added Successsfully');
        nav("/");
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className="add-header">
                        <h1>Todo Add</h1>
                    </Col>
                    <Col md={12}>
                        <Form >
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" onChange={(e) => setTodoTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" onChange={(e) => setTodoDescription(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" onClick={sendData}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}


export default TodoAddComponent;