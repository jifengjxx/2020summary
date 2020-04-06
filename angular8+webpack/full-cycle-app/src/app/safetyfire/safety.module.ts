import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import {SafetyHomeComponent} from './safety-home/safety-home.component';


const routes: Routes = [
  {path: '**',  redirectTo : 'safety/home', pathMatch: 'full'},
  {path: 'home', component: SafetyHomeComponent},
];




@NgModule({
  declarations: [
    SafetyHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class SafetyfireModule {}
