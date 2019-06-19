import React from 'react'
import axios from 'axios'
// here you get the object depending on the ID with the user's info
//this.props.match.params.id - comes from additional properties provided by the react router dom
 class UserShow extends React.Component {
    constructor(){
        super()
        this.state = {
            user: {},
            posts:[]
        }
    }
    
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
             .then(response => {
                 this.setState(() => ({
                        user: response.data
                 }))
             })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
             .then((response) => {
                this.setState(() => ({
                        posts: response.data
                }))
            })           
         }                   
    

    render(){
        return(
            <div>
                    <h2>{this.state.user.name}</h2>
                    <p>{this.state.user.email}</p>
                    <p>{this.state.user.phone}</p>
                    <p>{this.state.user.website}</p>   
                    
                    <h2>Posts - {this.state.posts.length}</h2>
                    <ul>
                    {
                        this.state.posts.map(function(post){
                            return <li key={post.id}>{post.title}</li>
    
                        })
                    } 
                    </ul>
            </div>    
        )
    }
}

export default UserShow