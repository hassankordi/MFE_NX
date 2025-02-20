import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { PrimeNgSharedLibModule } from '@v-17-2/material-ui-lib';
import { AuthService } from '@v-17-2/login-data-access';
@Component({
  selector: 'lib-home-feature',
  imports: [CommonModule,PrimeNgSharedLibModule],
  templateUrl: './home-feature.component.html',
  styleUrl: './home-feature.component.scss',
})
export class HomeFeatureComponent{
  @Input() filesInput: TreeNode[] = [];
  private _authService = inject(AuthService);
  visible = false;
  isLoggedIn:any;
  files: any[]=[];
    constructor(private router: Router) {
     this.isLoggedIn =  this._authService.isAuthenticated;
    }
    selectNode(event:{node:TreeNode}){
      const route = event.node.data?.route;
      if (route) {
        this.visible = false
        this.router.navigate([route]); // Navigate to the route
      }
    }
    logout(){
      // Logout logic
      this._authService.logout();
      this.visible = false

    }
}
