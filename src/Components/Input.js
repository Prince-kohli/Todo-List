import React,{useState} from "react"



function Input(props) {

    const[inputText,setInputText]=useState('')
 
    const handleEnterPress =(e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
    
    return(

<>

<div className="main-container">

<div className="row">

<div className="col-lg-6">
<input class=" form form-control me-2" type="search" placeholder="Enter your Todo" aria-label="Search"
value={inputText}
onChange={e=>{
    setInputText(e.target.value)
}}
onKeyDown={handleEnterPress}

></input>

</div>
<div className="col-lg-6">
<button className="btn btn-primary" 
onClick={()=>{
    props.addList(inputText)
setInputText('')
}}


>+</button> 


</div>

    
</div>





</div>





</>


    )
}

export default Input;