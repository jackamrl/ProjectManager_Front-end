import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;

@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.scss'],
})
export class ViewGraphComponent implements OnInit {
  public options: any = {
    Chart: {
      type: 'area',
      height: 200,
    },
    title: {
      text: 'Evolution',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['1750', '1800', '1850', '1900', '1950'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Asia',
        data: [5, 6, 8, 9, 14],
      },
      // {
      //   name: 'Europe',
      //   data: [163, 203, 276, 408, 547],
      // },
      // {
      //   name: 'America',
      //   data: [18, 31, 54, 156, 3391],
      // },
    ],
  };
  constructor() {}
  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}
