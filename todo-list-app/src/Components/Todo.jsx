import {useState} from 'react';
import Header from "./Header";
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Todo = () =>{
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Default",
            status: false
        }
    ]);

    const handleTaskCreate = (title)=>{
        const payload = {
            title: title,
            status: false,
            id: todos.length+1
        };
        setTodos([...todos, payload]);
        // console.log(payload);
    };
    // console.log(todos);
    // Delete task
    const handleDelete = (id)=>{
        setTodos(
            todos.filter(item => item.id !==id)
        )
    }

    // togle task
    const handleToggle = (id) =>{
        const updatedTodos = todos.map((item) => item.id===id? {...item,status: !item.status}:item);
        setTodos(updatedTodos);
    }

    return (
    <>
        <Header title="TODO" />
        <TodoInput onTaskCreate={handleTaskCreate} />
        {todos.map((todos)=>(
            < TodoItem
              title={todos.title}
              status={todos.status}
              key={todos.id} 
              id={todos.id} 
              handleDelete={handleDelete}
              handleToggle = {handleToggle}
            />
        ))}
    </>
    );
};
export default Todo;