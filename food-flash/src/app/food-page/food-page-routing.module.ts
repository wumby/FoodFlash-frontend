import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPageComponent } from './components/food-page.component';

const routes: Routes = [ { path: 'food-page/:id', component: FoodPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodPageRoutingModule { }
