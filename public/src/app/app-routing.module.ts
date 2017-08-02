import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LandingComponent},
//    {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }