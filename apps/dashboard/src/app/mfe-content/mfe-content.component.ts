import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'ng-mf-mfe-content',
  imports: [CommonModule,Image,ButtonModule,RouterModule],
  templateUrl: './mfe-content.component.html',
  styleUrl: './mfe-content.component.scss',
})
export class MfeContentComponent {}
