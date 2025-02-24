import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from '@v-17-2/home-ui';
import { navigateToRoute } from './home.facade';


@Component({
  selector: 'ng-mf-home',
  imports: [CommonModule,HomeUiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // just for calling methods from the facade.ts

  constructor() {
    navigateToRoute()
  }


  ngOnInit() {}
}
