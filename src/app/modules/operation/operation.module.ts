import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: OperationComponent }
];

@NgModule({
  declarations: [OperationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OperationModule { }
