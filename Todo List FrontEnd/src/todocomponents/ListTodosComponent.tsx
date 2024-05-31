import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface Todo{
    id:number;
    todoTitle:string;
    todoDescription:string;
    todoStatus:string
    date:string
}



const ListTodosComponent: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchData = async () => {
        const response = await axios.get<Todo[]>("http://localhost:8087/api/todos");
        const formattedTodos = response.data.map(todo => ({
            ...todo,
            date: new Date(todo.date).toLocaleString(), // Format date to a readable format
        }));
        setTodos(formattedTodos);
        console.log(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const completed = async (id:number) => {

        await axios.put(`http://localhost:8087/api/todos/updatestatus/${id}`,
         {
            todoStatus: "task done",
            
        });
        fetchData();


    };
    const notcompleted = async (id:number) => {

        await axios.put(`http://localhost:8087/api/todos/updatestatus/${id}`, 
{
            todoStatus: "Yet to Do",
            
        });
       fetchData();


    };



    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'darkblue', textAlign: 'center' ,marginBottom:'20px' }}>List of Todo's</h1>

                    </Col>
                    <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Created on </th>
                                    <th>Ations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(temp => (
                                        
                                        <tr key={temp.id}>
                                            <td>{temp.todoTitle}</td>
                                            <td>{temp.todoDescription}</td>
                                            <td>{temp.todoStatus}</td>
                                            <td>{temp.date}</td>
                                            <td>
                                                    <Link className="btn btn-info" to={'/todo-update/'+temp.id} style={{ marginRight: '10px' }}>Update</Link> 
                                                    <Link className="btn btn-danger" to={'/todo-delete/'+temp.id} style={{ marginRight: '10px' }}>Delete</Link>
                                                    <button className="btn btn-success" onClick={() => completed(temp.id)} style={{ marginRight: '10px' }}>Complete</button>
                                                    <button className="btn btn-danger" onClick={() => notcompleted(temp.id)}>inComplete</button>
                                            </td>

                                        </tr>

                                        
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default ListTodosComponent;