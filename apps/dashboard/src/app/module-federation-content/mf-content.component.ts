import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'ng-mf-module-federation-content',
  imports: [CommonModule,RouterModule,ButtonModule],
  templateUrl: './mf-content.component.html',
  styleUrl: './mf-content.component.scss',
})
export class ModuleFederationContentComponent {}
