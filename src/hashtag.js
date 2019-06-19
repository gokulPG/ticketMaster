import React from 'react'
import ReactDOM from 'react-dom'

class TagGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            text: '',
            withTag: ''
        }
    }

    textHandle = (e) => {
        const text = e.target.value
        this.setState(() => ({
            text
        }))
        
    }


    handleSubmit = (e) =>{
        e.preventDefault()

        let withTag= '#'
        let splitText = this.state.text.split(' ')
        splitText.forEach((c) => {
            withTag = withTag + c.charAt(0).toUpperCase() + c.slice(1)
        })
        this.setState(() => ({
            withTag
        }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Sentence:
                        <input type="text" value={this.state.text} onChange={this.textHandle}/>
                    </label> <br/>

                    <input type="submit"/>
                </form>

                <h3>{this.state.withTag}</h3>
            </div>
        )
    }
}

//ReactDOM.render(<TagGenerator/>, document.getElementById('root'))
export default TagGenerator