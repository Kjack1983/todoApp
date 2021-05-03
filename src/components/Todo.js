import React, {useState} from 'react'
import { ACTIONS } from './Actions';

export default function Todo({ todo, dispatch }) {

    const [displayEdit, setDisplayEdit] = useState(false);
    const [todoName, setTodoName] = useState('');

    const handleSubmit = (e) => {

        console.log('todoName inside submit >>>', todoName);

        e.preventDefault();
        dispatch({
            type: ACTIONS.EDIT_TODO, 
            payload: {
                id: todo.id,
                name: todoName
            }
        });
    }

    const handleEdit = () => {
        setDisplayEdit(!displayEdit);
    }

    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({
                type: ACTIONS.TOGGLE_TODO, 
                payload: {id: todo.id}
            })}>Toggle</button>
            
            <button onClick={() => dispatch({
                type: ACTIONS.DELETE_TODO, 
                payload: {id: todo.id}
            })}>Delete</button>
            

            <button onClick={handleEdit}>Edit</button>

            {   
                displayEdit ? 

                (<form onSubmit={handleSubmit}>
                    <input value={todoName} onChange={e => setTodoName(e.target.value)}/>
                </form>) : null
            }
            

        </div>
    )
}
