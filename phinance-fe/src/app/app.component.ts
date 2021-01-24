import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phinance-fe';

  constructor(private readonly sidebarService: NbSidebarService) {
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'main-nav');
  }
}
