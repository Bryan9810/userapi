import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserviewComponent } from './components/userview/userview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: UserlistComponent},
  { path: 'view/:id', component: UserviewComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component:  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
