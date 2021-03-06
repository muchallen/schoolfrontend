import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Form1", "Form2", "Form3", "Form4","Form5", "Form6"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="340"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;