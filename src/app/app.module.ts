import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBannersComponent } from './navbar/Banner/top-banners/top-banners.component';
import { LoginComponent } from './navbar/login/login.component';
import { SignupComponent } from './navbar/signup/signup.component';
import { SliderCouroselComponent } from './slider/slider-courosel/slider-courosel.component';
import { MainNavbarComponent } from './navbar/main-navbar/main-navbar.component';
import { ProductCardComponent } from './cards/product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './cards/search/search.component';
import { RouterTestingModule } from "@angular/router/testing";
import { NgxSpinnerModule } from "ngx-spinner";
import { TagsComponent } from './cards/tags/tags.component';

const appRoutes: Routes = [
  {  path:'' ,component:MainNavbarComponent},
  {  path:'login' ,component:LoginComponent},
  {  path:'signup' ,component:SignupComponent},
  {  path:'menu' , component:ProductCardComponent},
  {  path:'search/:searchTerm',component:ProductCardComponent},
  {  path:'tag/:tag', component:ProductCardComponent},
  // {  path:'',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  declarations: [		
    AppComponent,
    TopBannersComponent,
    LoginComponent,
    SignupComponent,
    SliderCouroselComponent,
    FooterComponent,
    MainNavbarComponent,
    ProductCardComponent,
    GalleryComponent,
    SearchComponent,
    TagsComponent,
    
   ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SlickCarouselModule,
    RouterModule,
    RouterTestingModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRoutes)

    // prime ng
  
  ],

  exports: [RouterModule],

  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
  export class AppModule { }
