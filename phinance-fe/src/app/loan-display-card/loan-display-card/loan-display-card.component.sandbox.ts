import { sandboxOf } from 'angular-playground';
import { LoanDisplayCardComponent } from '../loan-display-card.component';

export default sandboxOf(LoanDisplayCardComponent)
  .add('default', {
    template: `<app-loan-display-card></app-loan-display-card>`
  });
