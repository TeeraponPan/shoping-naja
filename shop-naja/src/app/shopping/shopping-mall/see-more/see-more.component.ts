import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import { ShoppingMallService } from '../../../service/shopping-mall.service';
import { ShoppingMall } from '../../../model/shopping-mall';
import {DataViewModule} from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-see-more',
  standalone: true,
  imports: [TagModule, DataViewModule, FormsModule, CommonModule, CardModule],
  templateUrl: './see-more.component.html',
  styleUrl: './see-more.component.scss'
})
export class SeeMoreComponent implements OnInit {
  constructor(private shoppingMallService: ShoppingMallService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.getShoppingMall()
    this.total = this.shoppingMall.length
  }

  getShoppingMall() {
    this.shoppingMallService.httpGetShoppingMall().subscribe(
      response =>{
        console.log("shopping-mall",response)
        this.shoppingMall = response
    }) 
  }

  shoppingMall: ShoppingMall[] = []
  total: number = 0
}
