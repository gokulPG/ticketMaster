import React from 'react'

class SearchForm extends React.Component{
    constructor(){
        super()
        this.state = {
            search:''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e){
        const search = e.target.value
        this.setState(() => ({ search }))

        this.props.handleSearch(search)
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.search} onChange={this.handleSearchChange}/>

                <button class="btn btn-primary" onClick={() => {
                    this.props.handlePriorityClick('all')
                }}>all</button>

                <button class="btn btn-success" onClick={() => {
                    this.props.handlePriorityClick('high')
                }}>high</button>

                <button class="btn btn-danger" onClick={() => {
                    this.props.handlePriorityClick('medium')
                }}>medium</button>

                <button class="btn btn-warning" onClick={() => {
                    this.props.handlePriorityClick('low')
                }}>low</button>

            </div>   
        )
    }
}

export default SearchForm