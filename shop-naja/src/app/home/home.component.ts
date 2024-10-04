import { Component } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { HeaderModule } from '../header/header.module';
import { ShoppingModule } from '../shopping/shopping.module';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginModule, HeaderModule, ShoppingModule, RouterModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
