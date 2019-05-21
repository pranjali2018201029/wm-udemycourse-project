import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Test Recipe", "This is dummy test recipe description", "http://clipart-library.com/data_images/125152.png" )
  ];

  constructor() { }

  ngOnInit() {
  }

}