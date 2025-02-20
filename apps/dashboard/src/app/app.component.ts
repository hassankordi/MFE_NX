import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Component({
  selector: 'ng-mf-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard';
    private loadingStatus = new BehaviorSubject<boolean>(false);
    get isLoading(): Observable<boolean> {
      return this.loadingStatus.asObservable();
    }
  constructor(private router: Router){
    this.setLoadingStatus()
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setLoadingStatus()
      });
  }
    setLoadingStatus(): void {
      // this.loadingStatus.next(isLoading);
      this.loadingStatus.next(true)
      setTimeout(()=>{
        this.loadingStatus.next(false)
      },1000)

    }
    files: any[] = [{
      key: '0',
      label: 'UI Components',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-objects-column',
      children: [
          {
              key: '0-0',
              label: 'Angular Material',
              data: {route:"Angular_Material"},
              icon: 'pi pi-fw pi-chart-bar',
          },
          {
              key: '0-1',
              label: 'PrimeNG',
              data: {route:"PrimeNG-App"},
              icon: 'pi pi-fw pi-chart-line',
          }
      ]
    },{
      key: '1',
      label: 'Important Content',
      data: 'Content Folder',
      icon: 'pi pi-file',
      children: [
          {
              key: '0-0',
              label: 'What Is MFE',
              data: {route:"Angular_Material"},
              icon: 'pi pi-question-circle',
          },
          {
              key: '0-1',
              label: 'Why NX',
              data: {route:"PrimeNG-App"},
              icon: 'pi pi-key',
          }
      ]
    }];
}
