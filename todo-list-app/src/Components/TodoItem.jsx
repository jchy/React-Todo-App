const TodoItem = ({id,status,title,description,dummyId,handleDelete,handleToggle}) =>{
 var itemNumber = dummyId;
if(itemNumber === 1)
    return (
        ''
    );

  return (
      <>
        <div className="task-parent-div">
            <div className="todo-items" >
                <span className="i-num"> {`${itemNumber-1}.`} </span>
                <span className="items task">{`${title}`}</span>
                <span className="items task" id="status">{`${status}`}</span>
                <button onClick={()=>handleToggle(id)} className="items toggle-btn">toggle</button>
                <button onClick={()=>handleDelete(id)} className="items delete-btn">X</button>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
      </>
    );
};
export default TodoItem;