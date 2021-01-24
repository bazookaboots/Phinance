import { Component, OnInit } from '@angular/core';
import { ChartJsComponent } from '../chart-js/chart-js.component';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-credit-main-view',
  templateUrl: './credit-main-view.component.html',
  styleUrls: ['./credit-main-view.component.scss']
})
export class CreditMainViewComponent implements OnInit {

  constructor() { }
  data;
  options;

  ngOnInit(): void {
    this.data = {
      labels: ["Principal", "Interest"],
      datasets: [
        {
          label: "Total Outstanding Loan Balance",
          backgroundColor: ["rgb(61, 231, 18)", "red"],
          data: [28079,21921]
        }
      ]
    }
    

    this.options = {
      aspectRatio: 1,
      responsive: true,
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
}
