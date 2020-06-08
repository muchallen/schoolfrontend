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
          categories: ["mon", "tue", "wed", "thur", "fri"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 60, 45, 70, 10]
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
              type="line"
              width="320"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;