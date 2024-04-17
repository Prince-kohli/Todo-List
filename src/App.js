import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import TodoList from './Components/TodoList';

function App() {


const [listTodo,setListTodo]=useState([]);



let addList = (inputText)=>{

  if(inputText!=='')
  setListTodo([...listTodo,inputText])
}

const deleteListItem=(key)=>{
  let  newListTodo=[...listTodo];
  newListTodo.splice(key,1)
  setListTodo([...newListTodo])
}

  return (


    <div className="main-container">
      <div className="center-container">
<Input  addList={addList}/>
<div className='heading'><h1>ToDoList</h1></div>


{listTodo.map((listItem,i)=>{

return(

  <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
)

})}
        </div>
    </div>
  );
}

export default App;
