import React, { useState } from 'react'

const Login = (props) => {

    let newEntry = {user_name:'', password:''}

    let [newLogin, setNewLogin] = useState(newEntry)

    const handleChange = (event) => {
        setNewLogin({...newLogin, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleLogin(newLogin)
        console.log(newLogin);
    }

    return(
        <>
            <details>
                <summary>Login</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user_name">Username: </label>
                    <input type="text" name="user_name" onChange={handleChange}/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange}/>
                    <input type="submit" value="Login" />
                </form>
            </details>
        </>
    )
}

export default Login
