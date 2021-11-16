const TodoItem = ({id,status,title,handleDelete,handleToggle}) =>{

    // console.log(title,status,id);

    return (
        <div>
            <span>{`${title} - ${status}`}</span>
            <button onClick={()=>handleDelete(id)}>X</button>
            <button onClick={()=>handleToggle(id)}>toogle</button>
        </div>
    );
};
export default TodoItem;