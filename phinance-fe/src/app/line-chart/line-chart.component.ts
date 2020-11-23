import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() data: Chart.ChartData;
  @Input() options: Chart.ChartOptions;
  @Input() chartId: string;
  @Input() chartType: string;
  constructor() { }

optionstest = {
}

  ngOnInit(): void {
    var myLineChart = new Chart("myLineChart", {
      type: 'line',
      data: this.data,
      options: this.options,
  });
  }
  renderChart(): void {
    var myLineChart = new Chart("myLineChart", {
      type: 'line',
      data: this.data,
      options: this.options,
  });
  }

}
