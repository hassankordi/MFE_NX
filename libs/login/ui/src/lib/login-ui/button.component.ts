import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'login-ui-button',
  template: `
  <!-- <button [disabled]="disabled" class="btn">{{ label }}</button> -->
  <button mat-flat-button [disabled]="disabled">{{ label }}</button>
  `,
  styles: [`
  .btn { padding: 0.5rem 1rem; border-radius: 5px; }
    `],
  standalone: true,
  imports: [CommonModule,MatButtonModule],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() disabled = false;
}