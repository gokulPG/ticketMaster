//ROW

import React from 'react'

class TicketRow extends React.Component {
   
    constructor(){
        super()
        this.state ={
            show : false
        }
        this.handleStatus = this.handleStatus.bind(this)
    }

    handleStatus(e){
            const accept  = e.target.checked

            if(accept){
            this.props.handlechek(this.props.ticket) 
            }else{
                this.props.handleNotChek(this.props.ticket)
            }
        }
    


     render(){
        return (
            <tr>
                <td> {this.props.ticket.ticket_code} </td>
                <td> {this.props.ticket.name} </td>
                <td> {this.props.ticket.department} </td>
                <td> {this.props.ticket.priority} </td>
                <td> {this.props.ticket.message} </td>
                <td>{
                    <form>
                        <input type='checkbox' value={this.state.show} onChange={this.handleStatus} />
                    </form>
                }</td>

                <td>
                    {
                        <button class="btn btn-info" onClick={() => {
                            this.props.btnfun(this.props.ticket.ticket_code)
                        }}>remove</button>
                    }
                </td>
            </tr>
        )
    }
}

export default TicketRow