import React, { useState } from 'react'

const AddTodo = ({ todos, setTodos }) => {
    const [todoname, setTodoName]= useState()
    const addtodos = ()=>{
        if(todoname !==""){
            setTodos([...todos,{id:todos.length+1,name:todoname,status:false}])
            setTodoName("")
        }else{
            alert("please Enter name")
        }
    }
  return (
    <>
        <div className="p-2 bg-white w-full">
            <h2 className="text-2xl text-green-500">Add Todo Here</h2>
            <label>Enter todo name:</label>
            <input onChange={(events) => setTodoName(events.target.value)} value={todoname} type='text' className='p-2, bg-slate-100 w-full mt-2' placeholder='Enter todo'/>
            <button onClick={()=> addtodos()} className='p-2 bg-green-600 text-white mt-3 w-full'>Add todo</button>
        </div>
      
    </>
  )
}

export default AddTodo