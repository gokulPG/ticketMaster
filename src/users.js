import React from 'react'
// npm install --save axios
import axios from 'axios'
import { Link } from 'react-router-dom'

class Users extends React.Component{
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        // ajax request or API call to the server

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response.data)
            this.setState(() => ({
                users: response.data

            }))
        })
    }
    render(){
        return(
            <div>
                
                <h2>Listing users - {this.state.users.length}</h2>
                <ul>
                    {this.state.users.map(user => {
                        return <li key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link> </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Users