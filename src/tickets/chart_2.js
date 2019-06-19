import React from 'react'
import { Chart } from 'react-google-charts'


class BarChart extends React.Component{

    render(){
            let technicalCount=0, hrCount=0, itCount=0, securityCount=0 
            return(
                    <div>
                            {
                                 this.props.checkedTickets.forEach((ticket) => {
                                    if(ticket.department === 'Technical'){
                                        technicalCount += 3
                                    }else  if(ticket.department === 'Hr'){
                                        hrCount += 3
                                    }else if(ticket.department === 'IT'){
                                        itCount += 3
                                    }else{
                                        securityCount +=3
                                    }
                               })}
                            }
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        [
                                        'Department',
                                        'headCount',
                                        { role: 'style' },
                                        {
                                            sourceColumn: 0,
                                            role: 'annotation',
                                            type: 'string',
                                            calc: 'stringify',
                                        },
                                        ],
                                        ['Technical',technicalCount, '#b87333', null],
                                        ['Hr',hrCount, 'silver', null],
                                        ['IT', itCount, 'gold', null],
                                        ['Security',securityCount, 'color: #e5e4e2', null],
                                    ]}
                                    options={{
                                        title: 'Tickets By Department',
                                        width: 600,
                                        height: 400,
                                        bar: { groupWidth: '95%' },
                                        legend: { position: 'none' },
                                    }}
                                />
                            </div>    
            )
        }
    }

    export default BarChart