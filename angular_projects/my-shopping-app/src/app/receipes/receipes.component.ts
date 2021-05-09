import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.scss']
})
export class ReceipesComponent implements OnInit {
  selecetdRecipe: Recipe;
  constructor() { 
    this.selecetdRecipe=new Recipe("","","")
  }

  ngOnInit(): void {
  }

}
