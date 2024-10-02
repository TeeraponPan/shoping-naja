import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  standalone: true,
  imports: [InputGroupModule, InputGroupAddonModule, InputTextModule],
  templateUrl: './shopping-search.component.html',
  styleUrl: './shopping-search.component.scss'
})
export class ShoppingSearchComponent implements OnInit {

  @Output() onInput = new EventEmitter()
  @Output() onSearch = this.onInput.pipe(debounceTime(400))

  constructor() {}
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
  
  inputSearch(text: string) {
    this.onInput.emit(text);
  }
}
