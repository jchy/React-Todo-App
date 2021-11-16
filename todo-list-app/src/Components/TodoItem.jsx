const TodoItem = ({id,status,title,handleDelete,handleToggle}) =>{
 var itemNumber = id;
    // console.log(title,status,id);

if(itemNumber === 1)
    return (
        ''
    );

  return (
        <div className="todo-items" >
            <span className="i-num">{itemNumber-1}.</span>
            <span className="items task">{`${title}`}</span>
            <span className="items task" id="status">{`${status}`}</span>
            <button onClick={()=>handleToggle(id)} className="items toggle-btn">toggle</button>
            <button onClick={()=>handleDelete(id)} className="items delete-btn">X</button>
        </div>
    );
};
export default TodoItem;