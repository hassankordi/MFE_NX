import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
@Component({
  selector: 'lib-org-chart-prime',
  imports: [CommonModule,OrganizationChartModule],
  templateUrl: './org-chart-prime.component.html',
  styleUrl: './org-chart-prime.component.css',
})
export class OrgChartPrimeComponent {
  @Input() data!: TreeNode[];
  constructor() {}
}
