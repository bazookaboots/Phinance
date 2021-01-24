import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbActionsModule, 
  NbAccordionModule, 
  NbCardModule,
  NbListModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ChartJsComponent } from './chart-js/chart-js.component';
import { CreditMainViewComponent } from './credit-main-view/credit-main-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { LoansMainViewComponent } from './loans-main-view/loans-main-view.component';
import { LoanDisplayCardComponent } from './loan-display-card/loan-display-card.component';
import { LoanTimelineComponent } from './loan-timeline/loan-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanDisplayCardComponent,
    LoansMainViewComponent,
    ChartJsComponent,
    LoanTimelineComponent,
    CreditMainViewComponent,
    DashboardViewComponent
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
    NbCardModule,
    NbListModule,
    NbSidebarModule,
    NbSidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
