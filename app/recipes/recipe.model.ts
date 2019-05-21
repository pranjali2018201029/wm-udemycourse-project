export class Recipe
{
  public name : string;
  public description : string;
  public imagePath : string;

  constructor(recipe_name:string, recipe_desc:string,recipe_imagePath:string){
    this.name = recipe_name;
    this.description = recipe_desc;
    this.imagePath = recipe_imagePath;
  }
}