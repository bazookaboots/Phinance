import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartJsComponent } from '../chart-js/chart-js.component';
import { LoanDisplayCardComponent } from '../loan-display-card/loan-display-card.component';
import { loanCollection } from '../test-loans';

@Component({
  selector: 'app-loans-main-view',
  templateUrl: './loans-main-view.component.html',
  styleUrls: ['./loans-main-view.component.scss']
})
export class LoansMainViewComponent implements OnInit{

  @ViewChildren(LoanDisplayCardComponent) loanDisplayCards: QueryList<LoanDisplayCardComponent>;
  @ViewChild("totalDougnutChart") totalChart: ChartJsComponent;
  
  data;
  options;

  loans = loanCollection.loans;
  loanColl;
  constructor() {
    this.loanColl = loanCollection;
  }

  ngOnInit(): void {
    console.log("Main init called")
    this.data = {
      labels: ["Principal", "Interest"],
      datasets: [
        {
          label: "Total Outstanding Loan Balance",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [this.loanColl.TotalOutstandingPrincipal,this.loanColl.TotalOutstandingInterest]
        }
      ]
    }

    this.options = {
      legend:{
        display: false
      }
    }
  }

  renderChart(i):void{
    //console.log("LoansMainViewComponent method renderChart Called with parameter(s):\n\ti:" + i)
    this.loanDisplayCards.forEach((item: LoanDisplayCardComponent) => {
      if (item.loanId == 'loanChartID'+i){
        console.log(item.loanId)
        item.renderChart();
      }});
  }
}
