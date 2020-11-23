import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartJsComponent } from '../chart-js/chart-js.component';
import { LoanDisplayCardComponent } from '../loan-display-card/loan-display-card.component';
import { loanCollection } from '../test-loans';

@Component({
  selector: 'app-loans-main-view',
  templateUrl: './loans-main-view.component.html',
  styleUrls: ['./loans-main-view.component.scss']
})
export class LoansMainViewComponent implements OnInit, AfterViewInit{

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

    this.data = {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.totalChart.renderChart();    
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
