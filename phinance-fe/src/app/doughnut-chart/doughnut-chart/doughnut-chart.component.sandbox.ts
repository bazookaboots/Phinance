import { sandboxOf } from 'angular-playground';
import { DoughnutChartComponent } from '../doughnut-chart.component';

export default sandboxOf(DoughnutChartComponent)
  .add('default', {
    template: `<app-doughnut-chart></app-doughnut-chart>`
  });
