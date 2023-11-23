import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodPageRoutingModule } from './food-page-routing.module';
import { FoodPageComponent } from './components/food-page.component';


@NgModule({
  declarations: [
    FoodPageComponent
  ],
  imports: [
    CommonModule,
    FoodPageRoutingModule
  ]
})
export class FoodPageModule { }
