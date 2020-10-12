import { Component, DoCheck, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { testLoans }from '../test-loans'

@Component({
  selector: 'app-loans-main-view',
  templateUrl: './loans-main-view.component.html',
  styleUrls: ['./loans-main-view.component.scss']
})
export class LoansMainViewComponent implements OnInit, DoCheck {


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
  
  loans = testLoans;
  constructor() { }

  ngOnInit(): void {
  }

  LogClick(id) {
    var myDoughnutChart = new Chart(id, {
      type: 'doughnut',
      data: this.data,
      options: this.options
  });
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
