import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit, AfterViewInit {

  @Input() data: Chart.ChartData;
  @Input() options: Chart.ChartOptions;
  @Input() chartId: string;
  @Input() chartType: string;
  @Input() selfRender: boolean = false;
  @Input() middleText?: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
        
    if (this.selfRender == true){
      var myChart = new Chart(this.chartId, {
        type: this.chartType,
        data: this.data,
        options: this.options
      });
    }
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
