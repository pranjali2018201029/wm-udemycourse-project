import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Test Recipe 1", "This is test recipe 1 description", "../../recipe.png" ),
    new Recipe("Test Recipe 2", "This is test recipe 2 description", "../../recipe.png" )
  ];

  constructor() { }

  ngOnInit() {
  }

}