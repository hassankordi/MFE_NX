import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';




import { FloatLabelModule } from 'primeng/floatlabel';

import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { TreeModule } from 'primeng/tree';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Toast } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';

@NgModule({
    imports: [
    
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
        MultiSelectModule
      ],
      exports: [
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
        MultiSelectModule
      ],
})
export class PrimeNgSharedLibModule { }