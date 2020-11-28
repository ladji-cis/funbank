import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardComponent } from './reward.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RewardComponent }
];


@NgModule({
  declarations: [RewardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RewardModule { }
