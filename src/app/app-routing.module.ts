import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRunComponent } from './new-run/new-run.component';

const routes: Routes = [
  {path: 'new-run', component: NewRunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
