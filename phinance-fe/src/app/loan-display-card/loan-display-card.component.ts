import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Loan } from '../shared/models/loan';

@Component({
  selector: "app-loan-display-card",
  templateUrl: "./loan-display-card.component.html",
  styleUrls: ["./loan-display-card.component.scss"],
})
export class LoanDisplayCardComponent implements OnInit {
  @Input() loanId: string;
  @Input() loanData: Loan;
  @ViewChild('myname') chart;
  
  loanDataParsed;
  constructor() {}

  ngOnInit(): void {
    this.loanDataParsed = {
      id: this.loanData.entityID,
      name: 'Direct Stafford Loan',
      type: this.loanData.type,
      principal: this.loanData.principleAmount,
      interest: this.loanData.interestAmount,
      currentRate: 0,
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
            ],
            data: [this.loanData.principleAmount, this.loanData.interestAmount],
          },
        ],
      },
      options: {
        cutoutPercentage: 70,
        title: {
          display: false
        },
      }
    }
  }
  renderChart():void {
    //console.log("LoanDisplayCardComponent method renderChart Called)
    this.chart.renderChart()
  }
}
