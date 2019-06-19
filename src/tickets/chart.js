import React from 'react'
import { Chart } from "react-google-charts"



class PieChart extends React.Component{
    
    render(){
            let high=0,medium=0,low=0
        return (
           <div>
               {
                   this.props.checkedTickets.forEach((ticket) => {
                        if(ticket.priority === 'high' || ticket.priority === 'High' ){
                            high++
                        }else if(ticket.priority === "medium"){
                            medium++
                        }else{
                            low++
                        }
                   })}
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                        ['Priority', 'levels'],
                        ['high' , high],
                        ['medium' , medium],
                        ['low', low]
                    ]}
                    options={{
                        title: 'Ticket priority',
                    }}
                rootProps={{ 'data-testid': '1' }}
                />
             </div>   
    )
}
}

export default PieChart

