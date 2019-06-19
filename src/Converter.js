import React from 'react'


class Converter extends React.Component{
    constructor(){
        super()
        this.state = {
            text1 : 0,
            text2 : 0,
            format: 0

        }
    }
    handleFeetChange = (e) => {
        const text1 = e.target.value 
        this.setState(() => ({ text1 }))
    }

    handleFormatChange = (e) =>{
        const measurement = e.target.value
        if(measurement == "meter"){
            this.setState(()=>({
                text2: (this.state.text1/3.2808)
            }))
        }else if(measurement == "inches"){
            this.setState(()=>({
                text2: (this.state.text1*12)
            }))
        }else if(measurement == "cm"){
            this.setState(()=>({
                text2: (this.state.text1/0.032808)
            }))
        }else if(measurement == "yards"){
            this.setState(()=>({
                text2: (this.state.text1*0.33333)
            }))
        } else if(measurement == "kms"){
            this.setState(()=>({
                text2: (this.state.text1/3280.8)
            }))
        } else {
            this.setState(()=>({
                text2: (this.state.text1*0.00018939)
            }))
        }
    }
    render(){
        return(
            <div>
                <form>
                    <label>
                        Feet:
                        <input type="number" value={this.state.text1} onChange={this.handleFeetChange}/>
                    </label>
                        =
                    <label>
                        <input type="number" value={this.state.text2}/>
                    </label>
                    <label>
                        <select value={this.state.format} onChange={this.handleFormatChange}>
                            <option value="">select</option>
                            <option value="meter">meters</option>
                            <option value="inches">inches</option>
                            <option value="cm">centimeters</option>
                            <option value="kms">kilometers</option>
                            <option value="yards">yards</option>
                            <option value="miles">miles</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
export default Converter