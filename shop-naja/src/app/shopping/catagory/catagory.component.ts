import { Component, Input, SimpleChanges } from '@angular/core';
import { Catagory } from '../../model/catagory';
import { CardModule } from 'primeng/card';
import { CatagoryService } from '../../service/catagory.service';

@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [CardModule],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.scss'
})
export class CatagoryComponent {

  constructor(private catagoryService:CatagoryService) {
    
  }
  @Input() fillter: string = ''
  
  ngOnChanges(changes: SimpleChanges): void{
    if(changes['fillter']?.currentValue) {
      console.log(this.fillter)
      this.getCatagory(this.fillter)
    }
  }

  ngOnInit(): void {
    this.getCatagory()
  }

  getCatagory(fillter?: string) {
    this.catagoryService.httpGetCatagory().subscribe(
      response =>{
        console.log("catagory",response)
        this.catagorys = response
    }) 
  }

  catagorys: Catagory[] = []
}
