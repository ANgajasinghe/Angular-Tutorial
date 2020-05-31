import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients : Array<Ingredient> = [
    new Ingredient('apple',5),
    new Ingredient('Tomatoes',10),
    new Ingredient('banana',20),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
