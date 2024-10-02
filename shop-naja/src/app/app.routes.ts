import { Routes } from '@angular/router';
import { SeeMoreComponent } from './shopping/shopping-mall/see-more/see-more.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent }, 
    {path: 'home', component:HomeComponent }, 
    {path: 'shopping-mall', component: SeeMoreComponent },
];
