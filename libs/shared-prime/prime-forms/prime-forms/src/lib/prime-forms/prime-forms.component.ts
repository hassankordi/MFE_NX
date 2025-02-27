import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMask } from 'primeng/inputmask';
// import { Fluid } from 'primeng/fluid';
interface City {
    name: string;
    code: string;
}


@Component({
  selector: 'lib-prime-forms',
  imports: [CommonModule,FormsModule,InputMask, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule],
  templateUrl: './prime-forms.component.html',
  styleUrl: './prime-forms.component.css',
})
export class PrimeFormsComponent {
  text1: string | undefined;

  text2: string | undefined;
  value2: string | undefined;
  number: string | undefined;

  selectedCity: City | undefined;

  cities: City[] = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
  ];
}
