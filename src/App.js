import './App.css';
import React, {useState,useEffect} from 'react';

import Header from './MyComponents/header';
import {AddTodo} from './MyComponents/AddTodo';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import { TodoItem } from './MyComponents/TodoItem';
import { About } from './MyComponents/About';
import { Routes} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  

  function onDelete(todo) {
    console.log("delete this: ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));

  }
  const addTodo = (title,desc) =>{
    console.log(title);
    const sno=(todos.length)+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    
    console.log(myTodo);
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  
  return (
    <Router>
    <div>Hello</div>
    <h1>Gat</h1>
    <Header title={"Todo List"} searchBar={true}/>
    <Routes>
          {/* <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
              
            )
          }}>
            
          </Route> */}
          {/* <Route exact path="/about" render={()=>{
             return(
              <>
              <About />
              </>
              
            )
          }}>

            
          </Route>  */}
          <Route exact path='/' element={[<AddTodo addTodo={addTodo}/>,<Todos todos={todos} onDelete={onDelete}/> ]}></Route>
          <Route exact path='/about' element={< About />}></Route>
      </Routes>  
    
    <Footer/>
    </Router>
    
  );
}

export default App;
