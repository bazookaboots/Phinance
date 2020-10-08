import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LoanDisplayCardComponent } from './loan-display-card/loan-display-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent,
    LoanDisplayCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
