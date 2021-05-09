import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeDe: Recipe;
  constructor() {
    this.recipeDe=new Recipe("dummy","dummy","")
   }

  ngOnInit(): void {
  }

}
