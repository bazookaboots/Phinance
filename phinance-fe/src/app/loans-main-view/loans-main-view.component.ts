import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartJsComponent } from '../chart-js/chart-js.component';
import { LoanDisplayCardComponent } from '../loan-display-card/loan-display-card.component';
import { LoanCollection } from '../shared/models/loan-collection';
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
  loanColl:LoanCollection;
  constructor() {
    this.loanColl = loanCollection;
  }

  ngOnInit(): void {
    this.data = {
      labels: ["Principal", "Interest"],
      datasets: [
        {
          label: "Total Outstanding Loan Balance",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [this.loanColl.principalAmount,this.loanColl.interestAmount]
        }
      ]
    }

    this.options = {
      legend:{
        display: false
      }
    }
  }
  
  thousands_separators(num): string
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
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
