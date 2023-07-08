import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from '../sample/sample.component';
import { AddsampleComponent } from '../addsample/addsample.component';

const routes: Routes =[
{path:"/samplepage", component: SampleComponent},
{path: "/addsample" , component: AddsampleComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild( routes)
  ]
})
export class SampleRoutingModule { }
