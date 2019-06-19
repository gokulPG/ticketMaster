import React from 'react'
import { Link } from 'react-router-dom'


class ProductAll extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 8
        }
    }
    
    render(){
        return(
            <div>
                <ul>
                {
                this.props.products.slice(0,this.state.count - 1).map((prod) => {
                    return <li key={prod.id}><Link to={`/products/${prod.id}`}> {prod.name} - {prod.price}/- </Link></li> 
                })
                
                }
                </ul>                
                <button onClick={() => {
                        this.setState((prevState) => ({ count: prevState.count + 5}))
                }}>Load more products</button>
            </div>
        )
    }

}
export default ProductAll

