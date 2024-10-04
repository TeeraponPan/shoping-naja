import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import { Router, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, InputGroupModule, InputGroupAddonModule, InputIconModule, IconFieldModule, CommonModule, FormsModule,
    RouterModule, MenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
  @Input() userName: string = 'Non User'
  @Input() token: string = ''
  @Output() searchChange = new EventEmitter()
  v1: string = '';
  items: MenuItem[] | undefined;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    console.log(this.token)
    this.items = [
      {
        label: 'บัญชี',
        shortcut: true,
        route: '/profile'
      },
      {
        label: 'การสั่งซื้อล่าสุดที่สั่งไว้',
        shortcut: true,
        route: ''
      },
      {
        label: 'ที่อยู่ที่บันทึกไว้',
        shortcut: true,
        route: ''
      },
      {
        label: 'เปลี่ยนภาษา/Languages',
        shortcut: true,
        route: ''
      },
      {
        label: 'ออกจากระบบ',
        route: ''
      }
    ]
  }
  
  doSearchChange(value: any) {
    this.searchChange.emit(value)
  }

  getToHomePage() {
    this.router.navigate(['/home']);
  }

  getToProfileMenuPage(url: string) {
    console.log(this.token)
    if (url !== "") {
      this.router.navigate([url, this.token]);
    }
  }

}
