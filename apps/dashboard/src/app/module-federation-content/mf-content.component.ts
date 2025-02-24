import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
@Component({
  selector: 'ng-mf-module-federation-content',
  imports: [CommonModule,Image],
  templateUrl: './mf-content.component.html',
  styleUrl: './mf-content.component.scss',
})
export class ModuleFederationContentComponent {}
