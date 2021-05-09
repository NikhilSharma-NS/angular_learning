import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipewasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test1', 'simple test 1', '/favicon.ico'),
    new Recipe('Test2', 'simple test 2', '/favicon.ico')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipewasSelected.emit(recipe)
  }

}
