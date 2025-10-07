import React from "react";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [
          10, 50, 30, 90, 40, 120, 100, 130, 150, 90, 110, 160, 180, 140, 190,
          200, 170, 210, 230, 190, 250, 270, 260, 300, 320,
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T07:30:00.000Z",
          "2018-09-19T08:30:00.000Z",
          "2018-09-19T09:30:00.000Z",
          "2018-09-19T10:30:00.000Z",
          "2018-09-19T11:30:00.000Z",
          "2018-09-19T12:30:00.000Z",
          "2018-09-19T13:30:00.000Z",
          "2018-09-19T14:30:00.000Z",
          "2018-09-19T15:30:00.000Z",
          "2018-09-19T16:30:00.000Z",
          "2018-09-19T17:30:00.000Z",
          "2018-09-19T18:30:00.000Z",
          "2018-09-19T19:30:00.000Z",
          "2018-09-19T20:30:00.000Z",
          "2018-09-19T21:30:00.000Z",
          "2018-09-19T22:30:00.000Z",
          "2018-09-19T23:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <div className="CustomerReview">
      <Chart options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default CustomerReview;
