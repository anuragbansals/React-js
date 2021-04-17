import React from 'react'

export const Todo = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onCLick = {()=> {onDelete(todo)}}>Delete</button>
        </div>
    )
}
