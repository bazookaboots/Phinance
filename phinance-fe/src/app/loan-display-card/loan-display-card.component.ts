import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loan-display-card",
  templateUrl: "./loan-display-card.component.html",
  styleUrls: ["./loan-display-card.component.sass"],
})
export class LoanDisplayCardComponent implements OnInit {
  data = {
    labels: [],
    datasets: [
      {
        label: "Population (millions)",
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
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
