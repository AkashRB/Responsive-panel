import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { AppNavigationComponent } from './appNavigation/appNavigation.component';


@NgModule({
  declarations: [
    AppComponent, AppNavigationComponent
  ],
  imports: [
    BrowserModule, CheckboxModule, FormsModule, ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
