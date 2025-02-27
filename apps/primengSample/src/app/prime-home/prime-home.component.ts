import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrgChartPrimeComponent} from '@v-17-2/org-chart-prime'
import {PieChartPrimeComponent} from '@v-17-2/pie-chart-prime'
import {ChartPrimeComponent} from '@v-17-2/chart-prime'
import {PrimeFormsComponent} from '@v-17-2/prime-forms'
import {TablePrimeComponent} from '@v-17-2/table-prime'
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'ng-mf-prime-home',
  imports: [CommonModule,ChartPrimeComponent,OrgChartPrimeComponent,PieChartPrimeComponent,TablePrimeComponent],
  templateUrl: './prime-home.component.html',
  styleUrl: './prime-home.component.css',
})
export class PrimeHomeComponent {
  orgChartData:TreeNode[];
  constructor(){
    this.orgChartData  = [
      {
          expanded: true,
          type: 'person',
          styleClass: '!bg-indigo-100 !text-indigo-900 rounded-xl',
          data: {
              image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
              name: 'Amy Elsner',
              title: 'CEO',
          },
          children: [
              {
                  expanded: true,
                  type: 'person',
                  styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                  data: {
                      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                      name: 'Anna Fali',
                      title: 'CMO',
                  },
                  children: [
                      {
                          label: 'Sales',
                          styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                      },
                      {
                          label: 'Marketing',
                          styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                      },
                  ],
              },
              {
                  expanded: true,
                  type: 'person',
                  styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                  data: {
                      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                      name: 'Stephen Shaw',
                      title: 'CTO',
                  },
                  children: [
                      {
                          label: 'Development',
                          styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                      },
                      {
                          label: 'UI/UX Design',
                          styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                      },
                  ],
              },
          ],
      },
  ];
  }
}
