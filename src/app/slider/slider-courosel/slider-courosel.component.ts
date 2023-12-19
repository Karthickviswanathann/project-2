
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-slider-courosel',
  templateUrl: './slider-courosel.component.html',
  styleUrls: ['./slider-courosel.component.css']
})

export class SliderCouroselComponent implements  OnInit{
  ngOnInit(): void {
   
  }

  constructor() {}


  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    "autoplay":true,
    "autoplaySpeed":5000,
    "pauseOnHover":true,
    "infinite":true,
    "responsive":[
      {
        "breakpoint":992,
        "settings":{
          "arrows":true,
          "infinite":true,
          "slidesToShow": 3, 
          "slidesToScroll": 3,
        }
      }
    ]
  };

  


}



  
 



 


 
































  
  // [this.cards].forEach(card)=> {

  //   card.addEventListener('mouseover',function(){
  //    card.classList.add('is-hover');
  //    })
  //    card.addEventListener('mouseleave',function(){
  //     card.classList.add('is-hover');
  //     })
  // }




  // dynamicSlides = [
  //   {
  //     id:' 1',
  //     src: 'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900',
  //     alt: 'Side 1',
  //     title: 'Side 1'
  //   },
  //   {
  //     id: '2',
  //     src: 'https://via.placeholder.com/600/771796',
  //     alt: 'Side 2',
  //     title: 'Side 2'
  //   },
  //   {
  //     id: '3',
  //     src: 'https://via.placeholder.com/600/24f355',
  //     alt: 'Side 3',
  //     title: 'Side 3'
  //   },
  //   {
  //     id: '4',
  //     src: 'https://via.placeholder.com/600/d32776',
  //     alt: 'Side 4',
  //     title: 'Side 4'
  //   },
  //   {
  //     id: '5',
  //     src: 'https://via.placeholder.com/600/f66b97',
  //     alt: 'Side 5',
  //     title: 'Side 5'
  //   }
  // ];

