import React from 'react'

class FilterAll extends React.Component{
    constructor(){
        super()
        this.state = {
            min: 100,
            max: 500,
            search:'',
            show: false,
            COD: false
        }
        this.handleMin = this.handleMin.bind(this)
        this.handleMax = this.handleMax.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
        this.handleCategory=this.handleCategory.bind(this)
        this.handleCod = this.handleCod.bind(this)
    }
    
    handleMin(e){
        const min = e.target.value
        this.setState(() => ({ min }))

    }
    handleMax(e){
        const max = e.target.value
        this.setState(() => ({ max }))
        this.props.handleCost(max)

    }
    handleSearch(e){
        const search = e.target.value
        this.setState(() => ({ search }))
        this.props.handleSearchValue(search)
    }

    handleCategory(e){
        const accept  = e.target.checked
        const val  = e.target.value
        if(accept){
            this.props.handleChecked(val)
        }else{
            this.props.handleNotChecked(val)
        }
    }

    handleCod(e){
        const accept = e.target.checked
        if(accept){
            this.props.handleCodChecked()
        }else{
            this.props.handleCodNotChecked()
        }
    }
     render() {
        return(
            <div>
                 <form>
                        <p>PRICE: </p> <br/>
                    <label>
                        min:
                        <input type="number" value={this.state.min} onChange={this.handleMin}/>
                    </label>
    
                     <label>
                        max:    
                         <input type="number" value={this.state.max} onChange={this.handleMax}/>
                         <br/> 
                     </label><br/>

                    <label>
                        CATEGORY: <br/>
                        <input type="text" placeholder="Search here" value={this.state.search} onChange={this.handleSearch} />
                    </label><br/>
                    <label>
                        
                        {   
                           this.props.categoryLog.map((category) => {
                             return (
                                    <div>
                                    <input type='checkbox' value={category} onChange={this.handleCategory}/> 
                                    {category}
                                    </div> 
                                    )  

                           })
                        }
                    </label><br/>
                    <label>
                        COD(cash on delivery)
                        <input type="checkbox" value={this.state.COD} onChange={this.handleCod} /> 
                    </label>
                </form>  
                 
            </div>   
        )
    }
}


export default FilterAll


