import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom'

import axios from 'axios'
import FilterAll from './products/Filter'
import ProductAll from './products/Product'
import ProductShow from './products/productShow'


const row = {
  display: 'flex'
};
/* Create two equal columns that sits next to each other */
const column1 = {
  flex: '30%', 
  padding: 10,
  height: 900, /* Should be removed. Only for demonstration */
  backgroundColor:'#F0E68C'
};

const column2 = {
    flex: '70%', 
    padding: 10,
    height: 900, /* Should be removed. Only for demonstration */
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center'
  };


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            products : [],
            originalProducts:[],
            list:[],
            empty:[],
            categLog: ["Beauty","Music","Baby","Industrial","Books","Health","Home","Stationary",
            "Sports","Automotive","Games","Gaming","electronics","Grocery","Tools","laptop","clothing"],
            originalCateglog: ["Beauty","Music","Baby","Industrial","Books","Health","Home","Stationary",
            "Sports","Automotive","Games","Gaming","electronics","Grocery","Tools","laptop","clothing"]
        }
        this.handleSearchValue = this.handleSearchValue.bind(this)
        this.handleCost = this.handleCost.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
        this.handleNotChecked = this.handleNotChecked.bind(this)
        this.handleCodChecked = this.handleCodChecked.bind(this)
        this.handleCodNotChecked =this.handleCodNotChecked.bind(this)
    }

    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/products.json')
             .then((response) => {
                 console.log(response.data)
                 this.setState(() => ({
                     products : response.data, 
                     originalProducts: response.data,
                     list:response.data
                 }))
             })
    }
    handleSearchValue(value){
        this.setState((prevState) => ({
            categLog: prevState.originalCateglog.filter(category => category.includes(value) )
        }))
    }

    handleCost(value){
        this.setState((prevState) => ({
            products: prevState.originalProducts.filter(product => product.price < value),
            list: prevState.empty.concat(this.state.products)
        }))
    }
    handleChecked(value){
        this.setState((prevState) => ({
            products: prevState.list.filter(product => product.category == value)
        }))
    }
    
    handleNotChecked(value){
        this.setState((prevState) => ({
            products: prevState.list.concat(this.state.empty)
            }))
    }
    handleCodChecked(){
        this.setState((prevState) => ({
            products: prevState.list.filter(product => product.cod == true)
        }))
    }
    handleCodNotChecked(){
        this.setState((prevState) => ({
            products: prevState.list.filter(product => product.cod == false)
        }))
    }

    render() {
    
        return(
            <BrowserRouter>
                    <div style={row}>
                        
                        <div style={column1}>
                            <h2> FILTER  </h2>
                            <FilterAll categoryLog={this.state.categLog} 
                                handleSearchValue={this.handleSearchValue} 
                                handleCost={this.handleCost} 
                                handleChecked={this.handleChecked}
                                handleNotChecked={this.handleNotChecked}
                                handleCodChecked={this.handleCodChecked}
                                handleCodNotChecked={this.handleCodNotChecked}
                            />
                        </div>

                       <div style={column2}>

                            <h2> PRODUCTS -{this.state.products.length}</h2>

                            <Route path="/" render={(props) => {
                            return <ProductAll {...props} products={this.state.products} />
                        }} exact={true} />

                        <Route path="/products/:id" component={ProductShow} exact={true} />
                        </div>

                    </div>
            </BrowserRouter>
        )
    }
}

export default App