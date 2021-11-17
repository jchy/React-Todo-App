import {useState} from 'react';
import Button from './Button';

const TodoInput = ({onTaskCreate}) =>{

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e) =>{
        setText(e.target.value);
    };
    const handleChangeForDescription = (e) =>{
        setDescription(e.target.value);
    };

    const handleClick = () =>{ 
        onTaskCreate(text,description);
    };

    return (
    <div>
        <input type="text" placeholder="Add Something..." value={text} onChange={handleChange} className="input-btn"/>
        <Button title="+" onClick={handleClick} />
        <div>
            <textarea type="textarea" placeholder="Description..." value={description} onChange={handleChangeForDescription} className="description-box">Task Description ...</textarea>
        </div>
    </div>
    );
};
export default TodoInput;