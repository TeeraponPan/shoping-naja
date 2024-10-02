import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, InputGroupModule, InputGroupAddonModule, InputIconModule, IconFieldModule, CommonModule, FormsModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
  
  @Output() searchChange = new EventEmitter()
  v1: string = '';

  doSearchChange(value: any) {
    this.searchChange.emit(value)
  }
}
