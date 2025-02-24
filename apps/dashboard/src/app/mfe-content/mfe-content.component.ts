import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
@Component({
  selector: 'ng-mf-mfe-content',
  imports: [CommonModule,Image],
  templateUrl: './mfe-content.component.html',
  styleUrl: './mfe-content.component.scss',
})
export class MfeContentComponent {}
