import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRunComponent } from './new-run/new-run.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-run', component: NewRunComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
