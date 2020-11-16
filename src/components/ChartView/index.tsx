import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ChartView({numberSerie}:any) {
  const [data, setData] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        stacked: true,
        toolbar: {
          autoSelected: 'pan',
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [
          [1486684800000, numberSerie],
          [1486771200000, 43],
          [1486857600000, 31],
          [1486944000000, 43],
          [1487030400000, 33],
          [1487116800000, 52],
        ],
      },
    ],
  });
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={data.options}
            series={data.series}
            type="area"
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ChartView;
