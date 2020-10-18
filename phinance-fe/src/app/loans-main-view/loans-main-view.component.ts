import { Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as Chart from 'chart.js';
import { LoanDisplayCardComponent } from '../loan-display-card/loan-display-card.component';
import { testLoans }from '../test-loans'

@Component({
  selector: 'app-loans-main-view',
  templateUrl: './loans-main-view.component.html',
  styleUrls: ['./loans-main-view.component.scss']
})
export class LoansMainViewComponent implements OnInit, DoCheck {

  @ViewChildren(LoanDisplayCardComponent) loanDisplayCards: QueryList<LoanDisplayCardComponent>;

  
  loans = testLoans;
  constructor() { }

  ngOnInit(): void {
  }

  renderChart(i):void{
    //console.log("LoansMainViewComponent method renderChart Called with parameter(s):\n\ti:" + i)
    this.loanDisplayCards.forEach((item: LoanDisplayCardComponent) => {
      if (item.loanId == 'loanChartID'+i){
        console.log(item.loanId)
        item.renderChart();
      }});
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    /* console.log("change detected")
    var myDoughnutChart = new Chart("0", {
      type: 'doughnut',
      data: this.data,
      options: this.options
  }); */
  }
}
