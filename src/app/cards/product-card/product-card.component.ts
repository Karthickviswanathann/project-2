import { Component, OnInit } from '@angular/core';
import { cakemodels } from '../models/cakemodels';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CakeService } from 'src/app/service/Cake-service/cake.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cakes:cakemodels[]=[];
  constructor(private cakeData:CakeService,activatedRoute:ActivatedRoute,
    private cartservice:CartService,private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    this.cakes=this.cakeData.getAllCakesBySearchTerm(params.searchTerm)
    else if(params.tag)
    this.cakes=this.cakeData.getAllCakesByTags(params.tag)
    else{
    this.cakes=cakeData.getAll();
  } 
  }) 



   
  }




  ngOnInit(): void {


  }



// addToCart(){
//   this.cartservice.addToCart(this.cakes);  
//   this.router.navigateByUrl('/menu')
// }

}
