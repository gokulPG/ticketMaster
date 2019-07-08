import React from 'react'
import axios from 'axios'

class TicketForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            department:'',
            priority:'',
            message:'',
            departmentOptions:[
                {id:1 ,name:'Technical'},
                {id:2 ,name:'Sales'},
                {id:3 ,name:'Hr'},
                {id:4 ,name:'Security'}
            ],
            errors:{}
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
    }

    // 3 ways of writing event handlers

    //1. Arrow functions
    handleNameChange = (e) => {
       // console.log(this)
        const name = e.target.value
        this.setState(() =>({ name }))
    } 

    //2. regular method - bind in constructor
    handleDepartmentChange = (e) => {
        // console.log(this)
         const department = e.target.value
         this.setState(() =>({ department }))
     } 
    
     //3. bind when calling function - least popular way - not at all used
     handlePriorityChange = (e) => {
        // console.log(this)
         const priority = e.target.value
         this.setState(() =>({ priority }))
     } 
   
     handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message:this.state.message
        }
        
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=627a98f2b755186b',formData)
             .then(response => {
                console.log(response.data)
                
                if(response.data.hasOwnProperty('errors')){
                    //console.log("show form erros")
                    this.setState(() => ({errors: response.data.errors}))
                }
                else
                {
                this.props.handleTicketSubmission(response.data)

                this.setState(() => ({
                    name: "",
                    department: "",
                    priority: "",
                    message: ""
                }))
                }
            })
        
        }

        handleReset(e){
            e.preventDefault()
            this.setState(() => ({
                name: "",
                department: "",
                priority: "",
                message: ""
            }))
        }


    render(){

        return(
            
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <fieldset>
                    <legend>Add Ticket</legend>
                    
                    <div className="form-group">
                        <label>
                            name
                            <input type="text" class="form-control" value={this.state.name} onChange={this.handleNameChange}/>
                            {this.state.errors.name && <span>{this.state.errors.name.join(', ')}</span>}
                        </label><br/>   
                    </div>

                    <div class="form-group">
                    <label>
                        department
                        <select value={this.state.department} class="form-control" onChange={this.handleDepartmentChange}>
                            <option value="">Select</option>
                            {
                                this.state.departmentOptions.map(function(depts){
                                    return <option key={depts.id} value={depts.name}>{depts.name.toUpperCase()}</option>
                                })

                            }
                        </select>
                        {this.state.errors.department && <span>{this.state.errors.department.join(', ')}</span>}
                    </label><br/>
                    </div>

                    <div class="form-group">
                    <label>
                         priority
                         <select value={this.state.priority} class="form-control" onChange={this.handlePriorityChange.bind(this)}>
                            <option value="">Select</option>
                            <option value="high">high</option>
                            <option value="medium">medium</option>
                            <option value="low">low</option>
                         </select>
                         {this.state.errors.priority && <span>{this.state.errors.priority.join(', ')}</span>}
                    </label><br/>
                    </div>

                    <div class="form-group">
                    <label>
                            message
                            <textarea value={this.state.message} class="form-control" onChange={(e)=>{
                                    //4th way of handling events
                                    const message = e.target.value
                                    this.setState(() =>({ message }))
                            }}></textarea>
                            {this.state.errors.message && <span>{this.state.errors.message.join(', ')}</span>}
                    </label><br/>
                    </div>
                    
                    <input class="btn btn-info" type="submit" />  
                    <button class="btn btn-dark" onClick={this.handleReset}>reset</button>    
                </fieldset>
                </div>
            </form>
        )
    }
}

export default TicketForm