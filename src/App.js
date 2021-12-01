import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'

// COMPONENTS //
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

    // backend urls
    const backend_url = "http://localhost:3000"
    // const backend_url = "https://calendr-it.herokuapp.com"

    let [todos, setTodos] = useState([])
    let [sideNav, setSideNav] = useState(false)

    // READ
    const getTodos = () => {
        axios
            .get(backend_url + '/todos')
            .then((response) => {
                setTodos(response.data)
                console.log(todos);
            })
    }

    // CREATE
    const handleCreate = (addTodo) => {
        axios
            .post(backend_url + '/todos', addTodo)
            .then((response) => {
                console.log(response);
                console.log(addTodo);
                getTodos()
            })
    }

    // UPDATE
    const handleUpdate = (updatedTodo) => {
        axios
            .put(backend_url + `/todos/${updatedTodo.todo_id}`, updatedTodo)
            .then((response) => {
                getTodos()
                console.log(updatedTodo);
            })
    }

    // DELETE
    const handleDelete = (event) => {
        axios
            .delete(backend_url + `/todos/${event.target.value}`)
            .then((response) => {
                console.log(event.target.value);
                getTodos()
            })
    }

    const revealSideNav = () => {
        sideNav ? setSideNav(false) : setSideNav(true)
    }

    useEffect(() => {
        getTodos()
    },[])

    return (
        <div className = "container">
            {sideNav ?
            <>
                <div className = "sideNav">
                    <div className = 'navTop'>
                        <h3>Username</h3>
                        <button>Login</button>
                        <button>Register</button>
                        <br/>
                        <Add handleCreate={handleCreate}/>
                    </div>
                    <div class = "navBot">
                        <a href="www.linkedin.com/in/moses-baek"><img className="socialBtn" src="/linkedin.png"/></a>
                        <a href="https://github.com/mobaek01"><img className="socialBtn" src="/github.png"/></a>
                    </div>
                </div>
            </>
            :
            <></>}

            <div className="sidenavToggle">
                <button className = "navBtn" onClick={revealSideNav}><img className = "navBtnImg" src ="/3lines.png"/></button>
            </div>
            <div className = "mainBody">
                <h1>Todo List</h1>
                <div>
                    {todos.map((todo) => {
                        return(
                            <div key={todo.todo_id}>
                                <h3>Title: {todo.title}</h3>
                                <h3>Description: {todo.description}</h3>
                                <h3>Due Date: {moment(todo.todo_date).format('MM/DD/YYYY')}</h3>
                                <h3>Start Time: {moment(todo.start_time, "HH:mm").format('hh:mm a')}</h3>
                                <h3>End Time: {moment(todo.end_time, "HH:mm").format('hh:mm a')}</h3>
                                <button onClick={handleDelete} value={todo.todo_id}>DELETE</button>
                                <Edit handleUpdate={handleUpdate} todo={todo}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default App;
