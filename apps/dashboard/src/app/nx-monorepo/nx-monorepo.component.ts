import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ng-mf-nx-monorepo',
  imports: [CommonModule,RouterModule,ButtonModule],
  templateUrl: './nx-monorepo.component.html',
  styleUrl: './nx-monorepo.component.scss',
})
export class NxMonorepoComponent {}
