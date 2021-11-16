import {useState} from 'react';
import Button from './Button';

const TodoInput = ({onTaskCreate}) =>{
    const [text, setText] = useState("");

    const handleChange = (e) =>{
        setText(e.target.value);
    };

    const handleClick = () =>{
        onTaskCreate(text);
    };

    return (
    <div>
        <input type="text" placeholder="Add Something" value={text} onChange={handleChange}/>
        <Button title="ADD" onClick={handleClick} />
    </div>
    );
};
export default TodoInput;