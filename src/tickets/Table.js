//TABLE
import React from 'react'
import TicketRow from './Row'


const TicketTable = (props) =>{
    return(
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"> Code </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Department </th>
                        <th scope="col"> Priority </th>
                        <th scope="col"> Message </th>
                        <th scope="col"> status </th>
                        <th scope="col"> action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tickets.map(function(ticket){
                            return <TicketRow key={ticket.ticket_code} ticket={ticket} btnfun={props.btndelete} handlechek={props.handleChec} handleNotChek={props.handleNotChec}/>
                    })}

                </tbody>
            </table>
        )
    }
    export default TicketTable

 