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
  datatest = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
        {
            label: "Prime and Fibonacci",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        }
    ]
};
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
