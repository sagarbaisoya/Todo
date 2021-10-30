import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from "uuid"

function TodoForms(props) {
    const [input, setInputs] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })



    const handleChange = e => {
        setInputs(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: uuidv4(),
            //id: Math.floor(Math.random * 1000),
            text: input
        })
        setInputs('');
    }
    return (


        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add a Todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForms
