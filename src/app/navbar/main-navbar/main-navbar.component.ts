import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
  
})
export class MainNavbarComponent {

  isMenuScrolled=false;

  @HostListener('window:scroll',['$event'])

  scrollCheck(){
    if(window.pageYOffset>57){
      this.isMenuScrolled=true;
    }

    else{
      this.isMenuScrolled=false;
    }

    
  }
}
