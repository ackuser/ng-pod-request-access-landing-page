import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
