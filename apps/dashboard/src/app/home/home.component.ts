import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from '@v-17-2/home-ui';


@Component({
  selector: 'ng-mf-home',
  imports: [CommonModule,HomeUiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor() {
  }

  ngOnInit() {}
}
