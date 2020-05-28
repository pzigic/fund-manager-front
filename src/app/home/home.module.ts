import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { HttpClient } from '@angular/common/http';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ]
})
export class HomeModule { }
