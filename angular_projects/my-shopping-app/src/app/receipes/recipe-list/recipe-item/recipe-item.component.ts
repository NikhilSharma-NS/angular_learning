import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { 
    this.recipe=new Recipe("","","")
  }

  ngOnInit(): void {
  }

  OnSelectedRecipe(){
    this.recipeSelected.emit();
  }

}
