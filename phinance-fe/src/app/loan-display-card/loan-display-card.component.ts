import { Component, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-loan-display-card",
  templateUrl: "./loan-display-card.component.html",
  styleUrls: ["./loan-display-card.component.scss"],
})
export class LoanDisplayCardComponent implements OnInit {
  @Input() loanId: string;
  @ViewChild('myname') chart;
  
  data = {
    labels: [],
    datasets: [
      {
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [2478, 5267, 734, 784, 433],
      },
    ],
  };
  options = {
    cutoutPercentage:70,
    title: {
      display: false
    },
  };
  constructor() {}

  ngOnInit(): void {}
  renderChart():void {
    console.log("renderchart called in display loanId: " + this.loanId)
    this.chart.renderChart()
  }
}
