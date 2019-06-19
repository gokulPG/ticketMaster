// / // //TICKET MASTER _ APP
import React from 'react'
import axios from 'axios'

import TicketTable from './tickets/Table'
import TicketForm from './tickets/form'
import SearchForm from './tickets/Search'
import PieChart from './tickets/chart'
import BarChart from './tickets/chart_2'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            tickets: [],
            originalTickets:[],
            checkedTickets:[]
            
        }
        this.handleTicketSubmission = this.handleTicketSubmission.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handlePriorityClick = this.handlePriorityClick.bind(this)
        this.handleDelet = this.handleDelet.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
        this.handleNotChecked = this.handleNotChecked.bind(this)
    }
    
    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=627a98f2b755186b')
             .then(response => {
                  this.setState(() => ({
                        tickets: response.data,
                        originalTickets:response.data
                  }))
             })
    }

    handleTicketSubmission(ticket) {
      //  console.log('app',ticket)
      this.setState((prevState) => ({
        tickets: prevState.tickets.concat(ticket),
        originalTickets: prevState.originalTickets.concat(ticket)
        }))
    }
    
    handleSearch(value){
        this.setState((prevState) => ({
            tickets: prevState.originalTickets.filter(ticket => ticket.ticket_code.includes(value))
        }))
    }

    handlePriorityClick(value){
        if(value == 'all'){
            this.setState((prevState) => ({
                tickets : [].concat(prevState.originalTickets)
            }))
        }else{

        this.setState((prevState) => ({
            tickets: prevState.originalTickets.filter(ticket => ticket.priority === value)
         }))
        }
    }
    
    handleDelet(value){
        axios.delete(`http://dct-api-data.herokuapp.com/tickets/${value}?api_key=627a98f2b755186b`)
        this.setState((prevState) => ({
            tickets: prevState.tickets.filter(ticket => ticket.ticket_code !== value),
            originalTickets: prevState.originalTickets.filter(ticket => ticket.ticket_code !== value)
         }))
    }

    handleChecked(value){
        this.setState((prevState) => ({
            checkedTickets: prevState.checkedTickets.concat(value)
        }))  

    }
    
    handleNotChecked(value){
        this.setState((prevState) => ({
            checkedTickets: prevState.checkedTickets.filter(ticket => ticket !== value)
        }))
    }


    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-8">                    
                            <h2>Ticket Master</h2>  
                            <h2>Listing Tickets - {this.state.tickets.length}</h2>

                            <SearchForm handleSearch ={this.handleSearch} handlePriorityClick={this.handlePriorityClick}/>


                            <TicketTable tickets={this.state.tickets} btndelete={this.handleDelet} handleChec={this.handleChecked} handleNotChec={this.handleNotChecked}/> <br/>
                        </div><br/>

                        <div className="col-md-4">
                            <TicketForm handleTicketSubmission={this.handleTicketSubmission}/>
                        </div>
                    </div>
                </div>
                        <PieChart checkedTickets={this.state.checkedTickets}/>
                        <BarChart checkedTickets={this.state.checkedTickets} />
            </div>        
                 
        )
    }
}

export default App



















































// import React from 'react'
// // npm install --save react-router-dom

// import { BrowserRouter, Route, Link } from 'react-router-dom'

// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

// import Users from './users'
// import UserShow from './UserShow'

// import Posts from './posts'
// import PostShow from './postShow'
// import PostComplete from './postComplete'

// import TagGenerator from './hashtag'
// import Converter from './Converter' 

// //import Posts from './Posts'
// // here 'to' and 'path' attribute in Link and path are just strings. It just needs to match

// const App = (props) => {
//     return(
//         <BrowserRouter>
//             <div>
//                 <h2>Welcome React</h2>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/users">Users</Link></li>
//                     <li><Link to='/posts'> Posts </Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/tag">TagGenerator</Link></li>
//                     <li><Link to="/convert">Converter</Link></li>
//                 </ul>

//                 {/* Route Matchers */}
//                 <Route path="/" component={Home} exact={true} />
//                 <Route path="/about" component={About}/>
//                 <Route path="/contact" component={Contact}/>
//                 <Route path="/users" component={Users} exact={true}/>
//                 <Route path="/users/:id" component={UserShow}/>
//                 <Route path="/posts" component={Posts} exact={true}/>
//                 <Route path="/posts/:id" component={PostShow}/>
//                 <Route path="/tag" component={TagGenerator}/>
//                 <Route path="/comments/:id" component={PostComplete}/>
//                 <Route path="/convert" component={Converter}/>

//             </div>
//         </BrowserRouter>
//     )
// }

// export default App