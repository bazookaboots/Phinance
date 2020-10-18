import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LoanDisplayCardComponent } from './loan-display-card/loan-display-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { LoansMainViewComponent } from './loans-main-view/loans-main-view.component';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbActionsModule, 
  NbAccordionModule, 
  NbCardModule 
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LoansTimelineComponent } from './loans-timeline/loans-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent,
    LoanDisplayCardComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    LoansMainViewComponent,
    LineChartComponent,
    LoansTimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbAccordionModule,
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
