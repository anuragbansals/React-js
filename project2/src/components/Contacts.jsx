import React from 'react';



const Contacts = (props) => {
    return (
        <div className="list-group">
            {props.contacts.map(ele => {
                return (
                    <li className="list-group-item">
                        {ele.name} {ele.email}
                        <button onClick={() => props.handleDelete(ele.email)} className="btn btn-danger mx-2">Delete</button>
                        <button onClick={() => props.handleEdit(ele.email)} className="btn btn-warning">Edit</button>
                    </li>
                )
            })}
        </div>
    )
}

export default Contacts;