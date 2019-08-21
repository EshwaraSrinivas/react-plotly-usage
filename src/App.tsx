import React, { Component } from 'react';
import PlotlyChart from 'react-plotlyjs-ts';
import './App.css';

class App extends Component {
  public handleClick = (evt: any) => alert('click')
  public handleHover = (evt: any) => alert('hover')

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
      const pieData = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];
      return (
        <div>
          <PlotlyChart data={data}
                       layout={layout}
                       onClick={this.handleClick}
                       config={config}
          />
          <PlotlyChart data={pieData}/>
        </div>
      );
  }
}

export default App;
