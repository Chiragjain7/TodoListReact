import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
   /* console.log(props.onDelete);*/
  return (
    <div className='container'>
        <h3 className='my-3'>Todos List</h3>
        {/* {props.todos} */}
        
        {props.todos.length===0?"No more TODOS to show":props.todos.map((todo)=>{
            return <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete}/>
        })}

    </div>
  )
}
