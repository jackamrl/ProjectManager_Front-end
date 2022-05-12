import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from '../helpers/donutChartOptions';

@Component({
  selector: 'app-mych',
  templateUrl: './mych.component.html',
  styleUrls: ['./mych.component.scss'],
})
export class MychComponent implements OnInit {
  donutChart = new Chart(donutChartOptions);

  constructor() {}

  ngOnInit(): void {}
}
