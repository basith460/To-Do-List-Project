import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ListTodosComponent from './ListTodosComponent';
import { Button } from 'react-bootstrap';

import '../App.css';




function App() {
    return(
        <>
        <div className="marquee-container">
                <p>Welcome to todo-list Manager</p>
            </div>
       <div className="button-container">
        <Button variant="primary" href="/todo-add">Add Todo</Button>
        </div>
        <ListTodosComponent></ListTodosComponent>
        </>
    )
}

export default App;
