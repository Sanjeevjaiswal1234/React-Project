import {useState} from 'react';
import TodoListItem from './TodoListItem';

function TodoList(){

    const[todoList,SettodoList] = useState([]);
 
   let saveTodoList = (event)=>{
        let todoname = event.target.todoname.value;
        if(!todoList.includes(todoname)){

          let finaltodoList = [...todoList,todoname]
                 SettodoList(finaltodoList)

                 
        }else{
         alert("todo Name is already Exit.." );
          
        }
       
       event.preventDefault();
   }
   let list = todoList.map((value,index)=>{
       
    return(
           <TodoListItem value={value} key={index} indexNumber={index}
            todoList={todoList}
            SettodoList={SettodoList}
           />
    )
   })

 


    return(
        <div className="App">
     <h1> Todo List</h1>

     <form onSubmit={saveTodoList}>
      <input type='text' name='todoname' placeholder="ADD ToDay Task"/>
      <button>Save</button>
     </form>

        <div className="outerDiv">
          <ul>
            
            {list}
          </ul>
        </div>
    </div>

    )
}
export default TodoList;