import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { Recommended } from '../../model/recommended';
import { RecommendedService } from '../../service/recommended.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [TagModule, CardModule, ButtonModule, RatingModule, ReactiveFormsModule],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.scss'
})
export class RecommendedComponent {
  constructor(private recommendedService: RecommendedService) {
    
  }

  ngOnInit(): void {
    this.getRecommended()
  }
  formGroup!: FormGroup;

  getRecommended() {
    this.recommendedService.httpGetRecommended().subscribe(
      response =>{
        console.log("recommended",response)
        this.recommended = response
    }) 
  }
  
  recommended: Recommended[] = []
}
