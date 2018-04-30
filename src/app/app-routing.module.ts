import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; /**this should be without ts extension */
import { AboutComponent } from './about/about.component';/**this should be without ts extension */

/**when you add the routes, you have to remove the app-home selector from app.component.ts  */
const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
