import React, {useState} from 'react'

const Add = (props) => {

    let newEntry = {title:'', description:'', todo_date:'', start_time:'', end_time:''}

    let [newTodo, setNewTodo] = useState(newEntry)

    const handleChange = (event) => {
        setNewTodo({...newTodo, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(newTodo)
    }

    return(
        <>
            <details>
                <summary>Add a Todo</summary>
                <form className="addForm"onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input type="text" name="title" onChange={handleChange}/>
                    <br />
                    <label htmlFor="description">Description:</label>
                    <br />
                    <textarea name="description" onChange={handleChange} />
                    <br />
                    <label htmlFor="todo_date">Due Date:</label>
                    <br />
                    <input type="date" name="todo_date" onChange={handleChange}/>
                    <br />
                    <label htmlFor="start_time">Start Time:</label>
                    <br />
                    <input type="time" name="start_time" onChange={handleChange}/>
                    <br />
                    <label htmlFor="end_time">End Time:</label>
                    <br />
                    <input type="time" name="end_time" onChange={handleChange}/>
                    <br />
                    <input type="submit" value="Add Todo"/>
                </form>
            </details>
        </>
    )
}

export default Add
