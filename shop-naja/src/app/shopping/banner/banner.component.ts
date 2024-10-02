import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { BannerService } from '../../service/banner.service';
import { Banner } from '../../model/banner';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  constructor(private bannerService: BannerService) {
    
  }

  ngOnInit(): void {
    this.getBanner()
  }

  getBanner() {
    this.bannerService.httpGetBanner().subscribe(
      response =>{
        console.log("banner",response)
        this.banners = response
    }) 
  }
  banners: Banner[] = []
}
