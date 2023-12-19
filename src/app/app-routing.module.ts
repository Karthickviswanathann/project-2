import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './navbar/login/login.component';
import { SignupComponent } from './navbar/signup/signup.component';
import { NotFoundError } from 'rxjs';
import { ProductCardComponent } from './cards/product-card/product-card.component';
import { MainNavbarComponent } from './navbar/main-navbar/main-navbar.component';



  

  @NgModule({
    imports:[
    ],
    exports:[RouterModule]
  })
export class AppRoutingModule { }
