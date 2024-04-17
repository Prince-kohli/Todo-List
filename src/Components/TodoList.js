import React from "react";

function TodoList(props) {
    return(
        <>
        
        <li className="listItem">

            {props.item}

            <span className="icon">  <i className="fa-solid fa-trash-can"
            onClick={e=>{
                props.deleteItem(props.index)
            }}
            
            ></i></span>
        </li>
        
        
        </>
    )
}


export default TodoList;