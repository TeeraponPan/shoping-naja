import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { HeaderModule } from './header/header.module';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ShoppingModule } from "./shopping/shopping.module";
import { HomeComponent } from './home/home.component';
import { LoginService } from './service/login.service';
import { SignIn } from './model/sign-in';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, DialogModule, ButtonModule, InputTextModule, LoginModule, HttpClientModule, ImageModule, HeaderModule, CarouselModule, TagModule, IconFieldModule, InputIconModule, ShoppingModule,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  Apptoken: string = "";

  constructor(private loginService:LoginService) {
    
  }

  searchInput: string = ''
  
  searchAppChange(value: string) {
    this.searchInput = value
    console.log('app = ',this.searchInput)
  }

  ngOnInit(): void {
    this.loginService.httpGetSignInToken().subscribe(
      response =>{
        console.log("Token",response)
        this.Apptoken = response.token
    }) 
  }
}
