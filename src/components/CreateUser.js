import React, { useState } from 'react'

const CreateUser = (props) => {

    let newEntry = {user_name:'', password:''}

    let [newAcc, setNewAcc] = useState(newEntry)

    const handleChange = (event) => {
        setNewAcc({...newAcc, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUserCreate(newAcc)
        console.log(newAcc);
    }

    return(
        <>
            <details>
                <summary>Register</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user_name">Username: </label>
                    <input type="text" name="user_name" onChange={handleChange}/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange}/>
                    <input type="submit" value="Register" />
                </form>
            </details>
        </>
    )
}

export default CreateUser
