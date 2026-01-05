import {useState} from 'react';

function TodoListItem({value,indexNumber,todoList,SettodoList}){

    const[status,setStatus] = useState(false);

    let deleteROw=()=>{

         let finaldata = todoList.filter((v,i)=>i!=indexNumber)
         
         SettodoList(finaldata)
    }
    let checkStatus=()=>{
          setStatus(!status)
    }

    return(
            <>
            <li className={(status)?'completeTodo':null} onClick={checkStatus}>{indexNumber+1}. {value} <span onClick={deleteROw}>&times;</span></li>
            </>
    )
}
export default TodoListItem;