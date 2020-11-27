import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartJsComponent } from '../chart-js/chart-js.component';
import { Loan } from '../shared/models/loan';

@Component({
  selector: 'app-loans-timeline',
  templateUrl: './loans-timeline.component.html',
  styleUrls: ['./loans-timeline.component.scss']
})
export class LoansTimelineComponent implements OnInit {
  @Input() loanId: string;
  @Input() loansData: Loan[];
  @ViewChild('lineChart') chart: ChartJsComponent;

  loanDataParsed;
  constructor() { }

  ngOnInit(): void {
    this.loanDataParsed = {
      id: this.loansData[0].entityID,
      name: 'Direct Stafford Loan',
      type: this.loansData[0].type,
      principal: this.loansData[0].principalAmount,
      interest: this.loansData[0].interestAmount,
      currentRate: 0,
      data: {
        labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [{
          lineTension: 0,
          showLine:true,
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#8e5ea2",
            "#8e5ea2",
            "#8e5ea2",
            "#8e5ea2",
            "#8e5ea2",
          ],
          data: this.combineLoanData(this.loansData),
        }],
      },
      options: {
        scales:{
          yAxes : [{
            ticks : {
              max :14,
              min : 0
            }
          }]
        },
        title: {
          display: false
        },
        legend: {
          display: false
        }
      }
    }
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.chart.renderChart()
  }
  combineLoanData(loans: Loan[]) {
    return [
      {y:1, x:2017},
      {y:2, x:2018},
      {y:3, x:2019}, 
      {y:4, x:2020}, 
      {y:5, x:2021}, 
      {y:6, x:2022}, 
      {y:7, x:2023}]

  }
}
