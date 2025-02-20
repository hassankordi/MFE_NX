import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'lib-buttons-material',
  imports: [CommonModule,MatIconModule,MatButtonModule,MatDividerModule],
  templateUrl: './buttons-material.html',
  styleUrl: './buttons-material.css',
})
export class ButtonsMaterialComponent {}
