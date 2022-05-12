import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.scss'],
})
export class MychartComponent implements OnInit {
  chartOptions: {};

  Highcharts = Highcharts;
  // Highcharts: typeof Highcharts = Highcharts; // required
  // chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  // chartOptions: Highcharts.Options = { ... }; // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  // updateFlag: boolean = false; // optional boolean
  // oneToOneFlag: boolean = true; // optional boolean, defaults to false
  // runOutsideAngular: boolean = false; // optional boolean, defaults to false

  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   series: [
  //     {
  //       data: [1, 2, 3],
  //       type: 'line',
  //     },
  //   ],
  // };

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'variablepie',
      },
      title: {
        text: 'Countries compared by population density and total area.',
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Area (square km): <b>{point.y}</b><br/>' +
          'Population density (people per square km): <b>{point.z}</b><br/>',
      },
      series: [
        {
          minPointSize: 10,
          innerSize: '20%',
          zMin: 0,
          name: 'countries',
          data: [
            {
              name: 'Spain',
              y: 505370,
              z: 92.9,
            },
            {
              name: 'France',
              y: 551500,
              z: 118.7,
            },
            {
              name: 'Poland',
              y: 312685,
              z: 124.6,
            },
            {
              name: 'Czech Republic',
              y: 78867,
              z: 137.5,
            },
            {
              name: 'Italy',
              y: 301340,
              z: 201.8,
            },
            {
              name: 'Switzerland',
              y: 41277,
              z: 214.5,
            },
            {
              name: 'Germany',
              y: 357022,
              z: 235.6,
            },
          ],
        },
      ],
    };

    // var myChart = new Chart('myChart', {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(255, 159, 64, 0.2)',
    //         ],
    //         borderColor: [
    //           'rgba(255, 99, 132, 1)',
    //           'rgba(54, 162, 235, 1)',
    //           'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //           'rgba(153, 102, 255, 1)',
    //           'rgba(255, 159, 64, 1)',
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
  }
}
