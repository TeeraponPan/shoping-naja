import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShopingCartComponent
  ],
  exports: [
    ShopingCartComponent
  ],
})
export class ShoppingModule { }
