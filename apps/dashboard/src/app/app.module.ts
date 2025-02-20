import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ButtonsMaterialComponent} from '@v-17-2/material-ui-lib'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { HttpClientModule } from '@angular/common/http';
import {PageLoaderComponent} from "@v-17-2/material-ui-lib"
import { HomeFeatureComponent } from '@v-17-2/home-feature';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonsMaterialComponent,
    PageLoaderComponent,
    HomeFeatureComponent,
    RouterModule.forRoot(appRoutes)],
  providers: [ 
     provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    })],
  bootstrap: [AppComponent],
})
export class AppModule {}
