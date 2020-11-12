import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{HttpClientModule}from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import{HeaderComponent} from './header/header.component';
import{AppComponent} from './app.component';

@NgModule({
  declarations: [HeaderComponent,AppComponent],
  imports: [ 
    BrowserModule,
   MatToolbarModule,
   MatExpansionModule,
   BrowserAnimationsModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   FormsModule,
   MatCardModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
