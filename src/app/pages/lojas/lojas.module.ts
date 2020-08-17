import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojasComponent } from './lojas.component';

import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';

const routes: Routes = [ { path: ':id', component: LojasComponent } ];

@NgModule({
  declarations: [LojasComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class LojasModule { }
