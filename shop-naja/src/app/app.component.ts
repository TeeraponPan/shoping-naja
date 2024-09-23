import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingModule } from './shopping/shopping.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShoppingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shop-naja';
}
