import { Component, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-loan-display-card",
  templateUrl: "./loan-display-card.component.html",
  styleUrls: ["./loan-display-card.component.scss"],
})
export class LoanDisplayCardComponent implements OnInit {
  @Input() loanId: string;
  @Input() loanData;
  @ViewChild('myname') chart;
  
  constructor() {}

  ngOnInit(): void {}
  renderChart():void {
    console.log("renderchart called in display loanId: " + this.loanId)
    this.chart.renderChart()
  }
}
