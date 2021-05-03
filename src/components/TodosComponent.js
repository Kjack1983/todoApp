import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import { ACTIONS } from './Actions';

const reducer = (todos, action) => {
    let { type, payload: { id, name }} = action;

    switch (type) {
        case ACTIONS.ADD_TODO:
            return [
                ...todos, 
                newTodo(name)
            ]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === id) {

                    return {
                        ...todo, 
                        complete: !todo.complete
                    }
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== id)
        case ACTIONS.EDIT_TODO:
            return todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        name: name
                    }
                }
                return todo;
            })
        default:
            return todos;
    }
}

const newTodo = (name) => {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

export const TodosComponent = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( { 
            type: ACTIONS.ADD_TODO, 
            payload: { name: name } 
        })
        setName('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={
                    e => setName(e.target.value)
                }/>
            </form>
            {
                todos.map(todo => {
                    return <Todo
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                    />
                })
            }
        </div>
    )
}

export default TodosComponent;
