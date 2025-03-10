import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';

@Component({
  selector: 'ng-mf-compare',
  imports: [CommonModule,Image],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.scss',
})
export class CompareComponent {}
