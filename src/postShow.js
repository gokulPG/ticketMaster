import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// here you get the object depending on the ID with the user's info
//this.props.match.params.id - comes from additional properties provided by the react router dom
 class PostShow extends React.Component {
    constructor(){
        super()
        this.state = {
            post: {},
            comments:[],
            count: 3,
            identity: 0,
            user:{}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        this.state.identity = id 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then(response => {
                 this.setState(() => ({
                        post: response.data
                 }))
                 axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
                      .then(response => {
                        this.setState(() => ({
                            user: response.data
                     }))
             })
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
             .then((response) => {
                this.setState(() => ({
                        comments: response.data
                }))
            })           
         
        }
              
    
     
    render(){
        return(
            <div>
                    <h2>{this.state.post.title}</h2>
                    <p><i>{this.state.post.body}</i></p>

                    <p>{this.state.user.name}</p>
                     
                    <h2>comments - {this.state.comments.slice(0,this.state.count-1).length}</h2>
                    
                    <ul>
                        {
                        this.state.comments.slice(0,this.state.count-1).map(function(comment){
                        return (
                                <div>                                    
                                     <li key={comment.id}><b>email:</b> {comment.email} </li>
                                     <li key={comment.id}><b>comment:</b> {comment.body} </li><br/>
                                </div>
                                )
                        })
                    }
                    </ul>
                    <button onClick={() => {
                        this.setState((prevState) => ({ count: prevState.count + 3}))
                    }}>load more</button>

            </div>    
            )
    }
}

export default PostShow

