import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingSearchComponent } from './shopping-search/shopping-search.component';
import { BannerComponent } from './banner/banner.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ShoppingMallComponent } from './shopping-mall/shopping-mall.component';
import { RecommendedComponent } from './recommended/recommended.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShoppingSearchComponent,
    BannerComponent,
    CatagoryComponent,
    ShoppingMallComponent,
    RecommendedComponent
  ],
  exports: [
    ShoppingSearchComponent,
    BannerComponent,
    CatagoryComponent,
    ShoppingMallComponent,
    RecommendedComponent
  ],
})
export class ShoppingModule { }
