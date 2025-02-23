import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';
// import { AppConfigService } from '@/service/appconfigservice';
@Component({
  selector: 'lib-pie-chart-prime',
  imports: [CommonModule,ChartModule],
  templateUrl: './pie-chart-prime.component.html',
  styleUrl: './pie-chart-prime.component.css',
})
export class PieChartPrimeComponent {
  data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    // configService = inject(AppConfigService);

    // designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    // themeEffect = effect(() => {
    //     if (this.configService.transitionComplete()) {
    //         if (this.designerService.preset()) {
    //             this.initChart();
    //         }
    //     }
    // });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            this.data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                    }
                ]
            };

            this.options = {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            color: textColor
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }

    }
}
