import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { TreeModule } from 'primeng/tree';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Toast } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { AuthService } from '@v-17-2/login-data-access';
@Component({
  selector: 'lib-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    DrawerModule,
    TreeModule,
    AvatarModule,


    SelectModule,
    PasswordModule,
    Toast,
    MultiSelectModule,
    HttpClientModule],
    providers:[
      MessageService,
      {provide:HttpClient,useClass:HttpClient}
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponentLib {
  private _authService = inject(AuthService);
  private _Router = inject(Router);
  private messageService: MessageService = new MessageService;
  constructor() { }
  loginForm = new FormGroup({
    username:new FormControl('emilys',[Validators.required]),
    password:new FormControl('emilyspass',[Validators.required]),
    selectedActivities:new FormControl(null,[]),
  })
 
  login(){
    const user = {
      username:this.loginForm.value.username??"",
      password:this.loginForm.value.password??"",
    }
    this._authService.login(user).subscribe({
      next:(res:any)=>{
        console.log(res);
        this._authService.isLogin = true;
        this.messageService.add({ severity: 'success', summary: 'WELCOME', detail: res.firstName });
        this._authService.setLoginStatue(res.accessToken);
        localStorage.setItem('activities',JSON.stringify(this.loginForm.value.selectedActivities))
       setTimeout(() => {
        this._Router.navigate(['/home'])
       }, 400);
 
      },
      error:(err)=>{
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message });
      }
    })
  }
}
