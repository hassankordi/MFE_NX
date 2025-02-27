import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

// import { Product } from './model';
import {  ProductService } from './customer.service';
import { Table } from 'primeng/table';
// import { ImportsModule } from './imports';
import { DropdownModule } from 'primeng/dropdown';
import { SortEvent } from 'primeng/api';
interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
@Component({
  selector: 'lib-table-prime',
  imports: [CommonModule,TableModule],
  templateUrl: './table-prime.component.html',
  styleUrl: './table-prime.component.scss',
  providers:[ProductService]
})

export class TablePrimeComponent {
  @ViewChild('dt') dt: Table | undefined;
 
  products: Product[]=[];

  initialValue: Product[]=[];

  isSorted: boolean | null = null;

  constructor(private productService: ProductService) {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
      this.initialValue = [...data];
  });
  }

  ngOnInit() {
     
  }

  customSort(event: SortEvent) {
      if (this.isSorted == null || this.isSorted === undefined) {
          this.isSorted = true;
          this.sortTableData(event);
      } else if (this.isSorted == true) {
          this.isSorted = false;
          this.sortTableData(event);
      } else if (this.isSorted == false) {
          this.isSorted = null;
          this.products = [...this.initialValue];
          this.dt?.reset();
      }
  }

  sortTableData(event:any) {
      event.data.sort((data1:any, data2:any) => {
          let value1 = data1[event.field];
          let value2 = data2[event.field];
          let result = null;
          if (value1 == null && value2 != null) result = -1;
          else if (value1 != null && value2 == null) result = 1;
          else if (value1 == null && value2 == null) result = 0;
          else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
          else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

          return event.order * result;
      });
  }
}

