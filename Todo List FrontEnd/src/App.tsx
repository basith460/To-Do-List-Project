import './App.css';
import TodoAddComponent from './todocomponents/TodoAddComponent';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import TodoHomeComponent from './todocomponents/TodoHomeComponent';
import TodoDeleteComponent from './todocomponents/TodoDeleteComponent';
import TodoUpdateComponent from './todocomponents/TodoUpdateComponent';



function App() {
  return (
    <div className='app'> 
     <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<TodoHomeComponent></TodoHomeComponent>}></Route>
            <Route path='/todo-add' element={<TodoAddComponent></TodoAddComponent>}></Route>
            <Route path='/todo-update/:id' element={<TodoUpdateComponent></TodoUpdateComponent>}></Route>
            <Route path='/todo-delete/:id' element={<TodoDeleteComponent></TodoDeleteComponent>}></Route>

          </Routes>


      </BrowserRouter>
    </div>
    
  );
}

export default App;
