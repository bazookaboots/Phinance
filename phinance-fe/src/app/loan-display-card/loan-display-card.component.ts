import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartJsComponent } from '../chart-js/chart-js.component';
import { Loan } from '../shared/models/loan';

@Component({
  selector: "app-loan-display-card",
  templateUrl: "./loan-display-card.component.html",
  styleUrls: ["./loan-display-card.component.scss"],
})
export class LoanDisplayCardComponent implements OnInit {
  @Input() loanId: string;
  @Input() loanData: Loan;
  @ViewChild('doughnutChart') chart:ChartJsComponent;
  
  loanDataParsed;
  constructor() {}

  ngOnInit(): void {
    this.loanDataParsed = {
      id: this.loanData.entityID,
      name: 'Direct Stafford Loan',
      type: this.loanData.type,
      principal: this.loanData.principalAmount,
      interest: this.loanData.interestAmount,
      currentRate: 0,
      data: {
        labels: ["Principal Amount", "Interest Amount"],
        datasets: [
          {
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
            ],
            data: [this.loanData.principalAmount, this.loanData.interestAmount],
          },
        ],
      },
      options: {
        cutoutPercentage: 70,
        title: {
          display: false
        },
        legend: {
          display:false
        }
      }
    }
  }
  renderChart():void {
    //console.log("LoanDisplayCardComponent method renderChart Called)
    this.chart.renderChart()
  }
}
