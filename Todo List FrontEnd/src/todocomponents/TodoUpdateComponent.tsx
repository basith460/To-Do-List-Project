import React, { Component } from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

type RouteParams = {
    id: string
}

interface TodoList {
    id: number,
    todoTitle: string,
    todoDescription: string,
    todoStatus: string
}


const TodoUpdateComponent: React.FC<{}> = () => {


    const { id } = useParams<RouteParams>();
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const [todoStatus, setTodoStatus] = useState("");
    const [myTodoLists, setMyTodoLists] = useState<TodoList>();

    const nav=useNavigate();

    const searchFetchData = async () => {

        const response = await axios.get<TodoList>(
            "http://localhost:8087/api/todos/" + id
        );
        setMyTodoLists(response.data);
        setTodoTitle(response.data['todoTitle']);
        setTodoDescription(response.data['todoDescription']);
        setTodoStatus(response.data['todoStatus']);

    };
    const updateData = async () => {

        const newData = {
            "id": id,
            "todoTitle": todoTitle,
            "todoDescription": todoDescription,
            "todoStatus": todoStatus
        };
        await axios.put("http://localhost:8087/api/todos/" + id, newData);
        alert("Successfully Updated");
        nav("/");


    };


    useEffect(() => {
        searchFetchData()
    }, [])



    return (

        <>
            <Container>
                <Row>
                    <Col md={12} className="update-header">Update Todo</Col>
                    <Col md={12}>
                        <Form style={{ width: "400px", marginLeft: "200px", marginTop: "50px" }} >
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Todo Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter todo title" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Todo Description</Form.Label>
                                <Form.Control type="text" placeholder="enter todo Description" value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Todo Completed</Form.Label>
                                <Form.Control type="text" placeholder="enter todo completed" value={todoStatus} onChange={(e) => setTodoStatus(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary"  onClick={updateData} >
                                Submit
                            </Button>
                        </Form>


                    </Col>
                </Row>
            </Container >
        </>
    )
}


export default TodoUpdateComponent;