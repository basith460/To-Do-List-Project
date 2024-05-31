import React, { Component } from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";

type RouteParams = {
    id: string
}

interface TodoList {
    id: number,
    todoTitle: string,
    todoDescription: string,
    todoStatus: string
}


const TodoDeleteComponent: React.FC<{}> = () => {


    const { id } = useParams<RouteParams>();
    const [myTodoList, setmyTodoLists] = useState<TodoList>();
    const nav =useNavigate();


    const searchFetchData = async () => {

        const response = await axios.get<TodoList>(
            "http://localhost:8087/api/todos/" + id
        );
        setmyTodoLists(response.data);

    };
    const deleteData = async () => {
        await axios.delete("http://localhost:8087/api/todos/" + id);
        alert("Data deleted");
        nav("/");

    };


    useEffect(() => {
        searchFetchData()
    }, [])



    return (

        <>
            <Container>
                <Row>
                    <Col md={12} className="delete-header">Delete Department</Col>
                    <Col md={12}>
                    <span style={{ fontSize:'20px' ,fontWeight: 'bold' }}>Id :</span> <span style={{ fontSize:'20px', color: 'darkred' }}> {myTodoList?.id}</span>
                        <br /><br />
                        <span style={{ fontSize:'20px' ,fontWeight: 'bold' }}>Todo title  :  </span> <span style={{ fontSize:'20px', color: 'darkred' }}>{myTodoList?.todoTitle}</span>
                        <br /><br />
                        <span style={{ fontSize:'20px',fontWeight:'bold'}}>Todo Descrition  :</span> <span style={{ fontSize:'20px', color: 'darkred' }}>{myTodoList?.todoDescription}</span>
                        <br /><br />
                        <span style={{ fontSize:'20px',fontWeight: 'bold' }}>Todo completed  :</span> <span style={{ fontSize:'20px', color: 'darkred' }}>{myTodoList?.todoStatus}</span>
                        <br /><br />
                        <button className="btn btn-danger" onClick={deleteData} >Delete</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default TodoDeleteComponent;