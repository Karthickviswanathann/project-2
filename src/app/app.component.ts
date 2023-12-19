import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spinnerCustom';

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


  constructor(private spinner:NgxSpinnerService){

  }
  ngOnInit() {
    this.spinner.show()

    setTimeout(()=>{
       this.spinner.hide()
    },5000);
      

   
  
  }



  scrollToTop(){
    document.body.scrollIntoView({behavior:'smooth'});
  }


}