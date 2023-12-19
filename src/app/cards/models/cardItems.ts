import { cakemodels } from "./cakemodels";

export class cardItems{
  
    constructor (public cake:cakemodels){
    }

    quantity:number=1;
    price:number=this.cake.price;
}