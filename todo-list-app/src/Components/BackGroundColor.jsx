const ToggleBackground =()=> {

}

return (
    <div className="todo-items" >
        <span className="i-num">{itemNumber-1}.</span>
        <span className="items task">{`${title}`}</span>
        <span className="items task">{`${status}`}</span>
        <button onClick={()=>handleToggle(id)} className="items toggle-btn">toggle</button>
        <button onClick={()=>handleDelete(id)} className="items delete-btn">X</button>
    </div>
);