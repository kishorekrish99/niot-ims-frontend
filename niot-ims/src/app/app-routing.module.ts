import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { ScanmodeComponent } from './scanmode/scanmode.component';
const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'scanmode', component: ScanmodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
