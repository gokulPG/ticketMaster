import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ProductShow extends React.Component{
    constructor(){
        super()
        this.state ={
            product:{}
        }
    }
   
    

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`http://dct-api-data.herokuapp.com/products/${id}.json`)
             .then(response => {
                console.log(response.data)
                 this.setState(() => ({
                        product: response.data
                 }))
             })
    }

    render(){
        return(
            <div>
                <h2>Name: {this.state.product.name}</h2><br/>
                <p>Category: {this.state.product.category}</p><br/>
                <p>Price:{this.state.product.price}</p><br/>
                    <h2>REVIEWS:</h2> <br/>
                    {

                    this.state.product.reviews !== undefined&&this.state.product.reviews.map(review => {
                                 return (
                                     <div>
                                         <h2>Name:{review.user}</h2><br/>
                                        <p> Body: {review.body}</p><br/>
                                        <p>Rating:{review.rating}/5</p><br/>
                                     </div>                                
                                    )})
                    }
                
                <Link to="/" >Back</Link>
            </div>
        )

    }

}

export default ProductShow

