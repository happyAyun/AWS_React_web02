import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

function generateData(count, yrange) {
  let i = 0;
  // eslint-disable-next-line max-len
  let series = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];
  while (i < count) {
    let x = (i + 1).toString();
    let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Metric1',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric9',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#008FFB'],
        title: {
          text: 'HeatMap Chart (Single color)'
        },
      },

    };
  }

  render() {
    return (

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
        </div>

    );
  }
}
export default Chart;
