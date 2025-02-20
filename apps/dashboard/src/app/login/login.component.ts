import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponentLib} from '@v-17-2/login'
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'ng-mf-login',
  imports: [CommonModule,LoginComponentLib],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true,
  providers:[ MessageService,
    {provide:HttpClient,useClass:HttpClient}]
})
export class LoginComponent {}
