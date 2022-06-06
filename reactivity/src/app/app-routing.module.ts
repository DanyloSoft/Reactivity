import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./pages/landing/landing.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
