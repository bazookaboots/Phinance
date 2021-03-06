import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent implements OnInit {

  @Input() data: Chart.ChartData;
  @Input() options: Chart.ChartOptions;
  @Input() chartId: string;
  @Input() chartType: string;
  constructor() { }


  ngOnInit(): void {
  }

  renderChart():void {
    //console.log("DoughnutChartComponent method renderChart Called)
    var myDoughnutChart = new Chart(this.chartId, {
      type: this.chartType,
      data: this.data,
      options: this.options
  });
  }

}

