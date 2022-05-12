import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from './helpers/donutChartOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  donutChart = new Chart(donutChartOptions);

  chart: any = [];
  ngOnInit(): void {
    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: 'My First dataset',
    //         backgroundColor: 'rgb(255, 99, 132)',
    //         borderColor: 'rgb(255, 99, 132)',
    //         data: [0, 10, 5, 2, 20, 30, 45],
    //         fill: false,
    //       },
    //       {
    //         label: 'My second dataset',
    //         backgroundColor: 'rgb(255, 99, 132)',
    //         borderColor: 'rgb(255, 99, 132)',
    //         data: [0, 10, 5, 2, 20, 30, 45].reverse(),
    //         fill: false,
    //       },
    //     ],
    //   },
    // });
  }
  title = 'ProjectManagerFront-end';
}
