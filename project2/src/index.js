import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Contacts from './components/Contacts'
import Search from './components/Search'


const App = () => {

    const [contacts, setContacts] = useState([
        {
            name: "John Johnie",
            email: "john@gmail.com"
        },
        {
            name: "Carlos Andrew",
            email: "carlie@gmail.com"
        }
    ])

    const [newName, setName] = useState("")
    const [newEmail, setEmail] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    const updateSearchContact = () => {
        const filteredContacts = contacts.filter(ele=> {
            return ele.name.toLowerCase().includes(searchTerm) || ele.email.toLowerCase().includes(searchTerm) 
        })

        return filteredContacts;
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleContactSubmit = (event) => {
        event.preventDefault()
        setContacts([...contacts, { name: newName, email: newEmail }])
        setName("");
        setEmail("");
    }

    const handleDelete = (email) => {
        const newContacts = contacts.filter(ele => {
            return ele.email!==email
        })
        setContacts(newContacts)
    }

    const handleEdit = (email) => {
        const newContacts = [...contacts]
        const index = contacts.findIndex(ele=> ele.email===email)
        newContacts[index] = {name: newName, email: newEmail}
        setContacts(newContacts)
        setName("");
        setEmail("");
    }

    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text"
                            value={newName}
                            onChange={handleNameChange}
                            className="form-control"
                            placeholder="Name"
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                            value={newEmail}
                            onChange={handleEmailChange}
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <button onClick={handleContactSubmit} type="submit" className="btn btn-primary">Add Contact</button>

            </form>
            <Search setSearchTerm={setSearchTerm}/>
            <Contacts handleEdit={handleEdit} handleDelete={handleDelete} contacts={updateSearchContact()}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


