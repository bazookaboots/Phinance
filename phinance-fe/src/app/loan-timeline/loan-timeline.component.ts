import { Component, Input, OnInit } from "@angular/core";
import { Loan } from "../shared/models/loan";
import { LoanInterface } from "../shared/models/loan-interface";

interface point{
  x: number,
  y: Date
}

function thousands_separators(num): string
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

@Component({
  selector: "app-loan-timeline",
  templateUrl: "./loan-timeline.component.html",
  styleUrls: ["./loan-timeline.component.scss"],
})
export class LoanTimelineComponent implements OnInit {
  @Input() loanObject: LoanInterface;

  data;
  options;
  

  constructor() {}

  ngOnInit(): void {
    let pointsPrincipal: { t: Date, y: number}[] = [];
    let principalAccumulator:number = 0;
    let pointsInterest: { t: Date, y: number}[] = [];
    let interestAccumulator:number = 0;
    this.loanObject.uncategorisedHistory.forEach( flow =>{
      principalAccumulator += flow[0];
      pointsPrincipal.push({ t: flow[1], y:principalAccumulator})
    })
    this.loanObject.interestAccrualHistory.forEach( flow =>{
      interestAccumulator += flow[0];
      pointsInterest.push({ t: flow[1], y:interestAccumulator})
    })
    this.data = {
      datasets: [
        {
          lineTension:0,
          showLine:true,
          label: "Interest",
          backgroundColor: "#8e5ea2",
          data: pointsInterest,
        },
        {
          lineTension:0,
          showLine:true,
          label: "Total",
          backgroundColor: "#3e95cd",
          data: pointsPrincipal,
        },
        
      ],
    };
    this.options = {
      responsive:true,
      legend: {
        position: 'bottom'
      },
      scales: {
        xAxes: [{
          ticks:{
            //this.loanObject.interestAccrualHistory[this.loanObject.interestAccrualHistory.length-1][1].getFullYear() + (this.loanObject.interestAccrualHistory[this.loanObject.interestAccrualHistory.length-1][1].getMonth()-1)/12,
            callback: (value, index, values)=>{
              return value;
            }
          },
          type: "time",
          position: "bottom",
          },
        ],
        yAxes: [{
          ticks:{
            callback: (value, index, values)=>{
              return '$' + thousands_separators( value);
            }
          },
          type: "linear",
          position: "bottom",
          },
        ],
      },
    };
  }
}
