import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.sass']
})

export class DoughnutChartComponent implements OnInit {

  @Input() data: Chart.ChartData;
  @Input() options: Chart.ChartOptions;
  constructor() { }


  ngOnInit(): void {
    var myDoughnutChart = new Chart('myChart', {
      type: 'doughnut',
      data: this.data,
      options: this.options
  });
  }

}

