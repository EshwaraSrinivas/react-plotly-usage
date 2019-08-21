import React, { Component } from 'react';
import PlotlyChart from 'react-plotlyjs-ts';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
    state = {
        pieData: [{
            values: [50, 30, 20],
            labels: ['India', 'US', 'UK'],
            type: 'pie',
            hole: 0.4,
            marker: {
                colors: ['orange', 'blue', 'green']
            },
            name: 'Population',
            hoverinfo: 'label+percent+name'
        }],
        pieLayout: {
            title: 'Population',
            showlegend: false,
            datarevision: 0,
            autosize: false
        },
        pieConfig: {
            displayModeBar: false
        },
        revision: 0
    };
    public handleClick = (evt: any) => alert('click')
    public handleHover = (evt: any) => alert('hover')
    public changeData = (evt: any) => {
        const { pieData, pieLayout } = this.state;
        if(pieData[0].marker.colors[1] === 'blue') {
            pieData[0].values[1] = 20;
            pieData[0].marker.colors[1] = 'purple';
        } else {
            pieData[0].values[1] = 30;
            pieData[0].marker.colors[1] = 'blue';
        }
        this.setState({ revision: this.state.revision + 1 });
        pieLayout.datarevision = this.state.revision + 1;
    };

    public render() {
        const data = [
            {
                marker: {
                    color: 'rgb(16, 32, 77)'
                },
                type: 'scatter',
                x: [1, 2, 3],
                y: [6, 2, 3]
            },
            {
                name: 'bar chart example',
                type: 'bar',
                x: [1, 2, 3],
                y: [6, 2, 3],
            }
        ];
        const config = {
            responsive: true,
            showLink: false,
            displayModeBar: false,
        };
        const layout = {
            annotations: [
                {
                    text: 'simple annotation',
                    x: 0,
                    xref: 'paper',
                    y: 0,
                    yref: 'paper'
                }
            ],
            title: 'simple example',
            xaxis: {
                title: 'time'
            },
        };
        const { pieData, pieLayout, pieConfig } = this.state;
        return (
            <div>
                <PlotlyChart data={data}
                            layout={layout}
                            config={config}
                />
                <Button variant="contained" color="primary" onClick={this.changeData}>
                    ChangeData
                </Button>
                <PlotlyChart data={pieData} layout={pieLayout} config={pieConfig}/>
            </div>
        );
    }
}

export default App;
