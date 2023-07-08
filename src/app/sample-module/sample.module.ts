import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../root-routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SampleRoutingModule } from './sample-routing/sample-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule, BrowserModule, SampleRoutingModule, HttpClientModule, FormsModule
    
  ]
})
export class SampleModule { }
