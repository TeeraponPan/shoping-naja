import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from '../model/profile';
import { ProfileService } from '../service/profile.service';
import { PanelModule } from 'primeng/panel';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';  
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PanelModule, MenuModule, CommonModule, InputTextModule, FormsModule, FloatLabelModule, ButtonModule, RadioButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() token: string = ""
  constructor(private route: ActivatedRoute, private profileService:ProfileService) {

  }
  
  selectedCategory: any = null;
  menus: MenuItem[] | undefined;
  profiles: Profile[] = []
  profile: Profile = {
    id: 0,
    first_name: "first_name",
    last_name: 'last_name',
    mobile: 'mobile',
    sex: 'sex',
    status: 'status',
    image: '',
    user_id: 0
  }
    categories: any[] = [
        { name: 'หญิง', key: 'F' },
        { name: 'ชาย', key: 'M' },
        { name: 'อื่นๆ', key: 'O' },
    ];

  ngOnInit() {
    console.log("profile token", this.token)
    this.route.params.subscribe((params: Params) =>{ 
      this.token = params['token']
      this.getProfile()
    }
    );
    console.log("profile token", this.token)
   

    this.menus = [
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
        label: 'ออกจากระบบ',
        route: ''
      }
    ]
  }


  getProfile() {
    this.profileService.httpGetProfile(this.token).subscribe(
      response =>{
        console.log("profile",response)
        this.profiles = response
        this.profile = this.profiles[0]
    })
  }

  patchProfile() {
    console.log("profile",this.profile)
    this.profileService.httpPatchProfile(this.token,this.profile).subscribe(
      response =>{
        console.log(response)
    })
  }

}
