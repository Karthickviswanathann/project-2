import { Injectable } from '@angular/core';
import { cakemodels } from 'src/app/cards/models/cakemodels';
import { sample_items, sample_tags } from 'src/app/cards/models/data';
import { tags } from 'src/app/cards/models/tag';


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor() { }
  
  getAll():cakemodels[]{
    return sample_items;
     }
  getAllCakesBySearchTerm(searchTerm:string){
    return this.getAll().filter(cake=>cake.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }    

  getAllTags():tags[]{
    return sample_tags;
  }

  getAllCakesByTags(tag:string){
   return tag ==="All"?
   this.getAll():

   this.getAll().filter(cake=>cake.tags?.includes(tag));

  }

  // getAllCakesById(cakeId:string){
  //     return this.getAll().find(cake=>cake.id ==cakeId) ?? new CakeService();
  // }


}