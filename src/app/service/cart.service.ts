import { Injectable } from '@angular/core';
import { cart } from '../cards/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { cakemodels } from '../cards/models/cakemodels';
import { cardItems } from '../cards/models/cardItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   private addtocart:cart =this.getCartFromLocalStorage();
   private cartSubject:BehaviorSubject<cart> = new BehaviorSubject(this.addtocart); 
  constructor() { }


  addToCart(cake:cakemodels):void{
    let cartItem=this.addtocart.item.find(item=>item.cake.id == cake.id)

    if(cartItem)return

    this.addtocart.item.push(new cardItems(cake));
    this.setCartToLocalstorage();
  }

  removeFromCart(cakeId:string):void{
    this.addtocart.item = this.addtocart.item.filter(item=>item.cake.id!=cakeId);
    this.setCartToLocalstorage();

  }


  changeQty(cakeId:string,qty:number){
      let cartItem=this.addtocart.item.find(item=>item.cake.id===cakeId);

      if(!cartItem)return;

      cartItem.quantity =qty;
      cartItem.price= qty*cartItem.cake.price;
      this.setCartToLocalstorage();

  }

  cartClear(){
    this.addtocart=new cart();
    this.setCartToLocalstorage();

  }

  getCartObservables():Observable<cart>{
    return this.cartSubject.asObservable();
  }


  setCartToLocalstorage():void{
    this.addtocart.totalPrice = this.addtocart.item.reduce
    ((prevsum,currentItem)=>prevsum+currentItem.price,0)
    this.addtocart.totalCount=this.addtocart.item.reduce
    ((prevSum,currentItem)=>prevSum+currentItem.quantity,0)
    const cartJson=JSON.stringify(this.addtocart);
    localStorage.setItem('cart',cartJson);
    this.cartSubject.next(this.addtocart);    

  }


  private getCartFromLocalStorage():cart{
      const cartJson =localStorage.getItem('cart');
      return cartJson? JSON.parse(cartJson):new cart();
  }
}
