import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoonsComponent } from './boons/boons.component';
import { HomeComponent } from './home/home.component';
import { NewRunComponent } from './new-run/new-run.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-run', component: NewRunComponent},
  {path: 'home', component: HomeComponent},
  {path: 'boons', component: BoonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
