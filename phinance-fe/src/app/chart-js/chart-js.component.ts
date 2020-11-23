import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit {

  @Input() data: Chart.ChartData;
  @Input() options: Chart.ChartOptions;
  @Input() chartId: string;
  @Input() chartType: string;
  constructor() { }


  ngOnInit(): void {
  }

  renderChart(): void {
    //console.log("DoughnutChartComponent method renderChart Called)
    var myChart = new Chart(this.chartId, {
      type: this.chartType,
      data: this.data,
      options: this.options
    });
  }
}
