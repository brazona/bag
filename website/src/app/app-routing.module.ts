import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'contacts', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }