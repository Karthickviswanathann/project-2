import { Component, OnInit } from '@angular/core';
import { tags } from '../models/tag';
import { cakemodels } from '../models/cakemodels';
import { CakeService } from 'src/app/service/Cake-service/cake.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
 tags?:tags[];

 constructor(cake:CakeService){
  this.tags=cake.getAllTags();
 }
  ngOnInit(): void {
  }


}
