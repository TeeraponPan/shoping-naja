import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { ShoppingMallService } from '../../service/shopping-mall.service';
import { ShoppingMall } from '../../model/shopping-mall';
import { RouterModule, RouterOutlet, Router } from '@angular/router'


@Component({
  selector: 'app-shopping-mall',
  standalone: true,
  imports: [TagModule, RouterOutlet, RouterModule],
  templateUrl: './shopping-mall.component.html',
  styleUrl: './shopping-mall.component.scss'
})
export class ShoppingMallComponent {
  constructor(private shoppingMallService: ShoppingMallService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.getShoppingMall()
  }

  getShoppingMall() {
    this.shoppingMallService.httpGetShoppingMall().subscribe(
      response =>{
        console.log("shopping-mall",response)
        this.shoppingMall = response
    }) 
  }

  getSeeMore() {
    this.router.navigate(['/shopping-mall']);
  }

  shoppingMall: ShoppingMall[] = []
}
