#### Component and Databinding 

Navigation between recipe and shopping

##### Need to show component on the basic of selection of user and get the input from header component and validate in app component

Step 1:

add the click listener in header component

header.component.html
```
<ul class="nav navbar-nav">
          <li><a href="#" (click)="onSelect('recipes')">Recipes</a></li>
          <li><a href="#" (click)="onSelect('shopping-list')">Shopping List</a></li>
        </ul>
```

header.component.ts

```
@Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
this.featureSelected.emit(feature)
  }
```

will get the input from headercomponent and pass into featureSelected varibale.
featureSelected will access in the app component 

Step2 :

will receive the input in featureSelected and call onNavigate function and 
and assign loadedfeature value 
app.component.html

```
<app-header (featureSelected)="onNavigate($event)"></app-header>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <app-receipes></app-receipes>
      <app-shopping-list></app-shopping-list>
    </div>
  </div>
</div>
```

app.component.ts
```
export class AppComponent {
  loadedfeature = 'recipes';

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}
```
Step 3:

now we have loadedfeature variable . will add the if condition in the app componet.
on the click of header component recipes or shopping-list will display
by default recipes will display.

app.component.html

```
<app-header (featureSelected)="onNavigate($event)"></app-header>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <app-receipes *ngIf="loadedfeature=='recipes'"></app-receipes>
      <app-shopping-list *ngIf="loadedfeature=='shopping-list'"></app-shopping-list>
    </div>
  </div>
</div>
```

#### Passing Recipe Data with Property binding

Will get the recipe single sigle Obejct of recipe-list component and 
view on receipe-item component.



Step 1:

Cut the recipelist component of html and put into recipe-item component in html file

```
<a href="#" class="list-group-item clearfix" *ngFor="let recipe of recipes">
        <div class="pull-left">
          <h4 class="list-group-item-heading">{{recipe.name}}</h4>
          <p class="list-group-item-text">{{recipe.description}}</p>        
        </div>
        <span class="pull-right">
          <img src="{{recipe.imagePath}}" alt="{{recipe.name}}" class="img-responsive" style="max-height: 50px;">
        </span>
      </a>

```

Step 2:

Cut the ngfor loop from recipe-item.component

and go inside recipe-list.component.html and add like below

recipe-list.component.html
```
<div class="row">
    <div class="col-xs-12">
      <button class="btn btn-success">New Recipe</button>
    </div>
   </div>
   <hr>
   <div class="row">
    <div class="col-xs-12">    
      <app-recipe-item *ngFor="let recipe of recipes"></app-recipe-item>
    </div>
   </div>
```

Step3 : 

add the recipe varible in the recipe.item.component.ts

  ```
 export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

}
  ```

bind this into list component

```
 <div class="col-xs-12">    
      <app-recipe-item *ngFor="let recipeElement of recipes" [recipe]="recipeElement"></app-recipe-item>
    </div>
```
Step4 : 
we need to assign the defualt value as well in recipe-item-component.ts

```
 @Input() recipe: Recipe;

  constructor() { 
    this.recipe=new Recipe("","","")
  }
```

Step 5:

here the recipe-item.componnet.html which we have copied from list earlier.
Now  recipe varible is comming from recipe-list and passed as property binding and 
accessed in recipe-item component

```
<a href="#" class="list-group-item clearfix">
    <div class="pull-left">
      <h4 class="list-group-item-heading">{{recipe.name}}</h4>
      <p class="list-group-item-text">{{recipe.description}}</p>        
    </div>
    <span class="pull-right">
      <img src="{{recipe.imagePath}}" alt="{{recipe.name}}" class="img-responsive" style="max-height: 50px;">
    </span>
  </a>
```


#### Passing data with Event and Property Binding


Step 1:
Click on single item and display detail on the recipe section

add the click listner in the recipe-item-component.html

```
<a href="#" class="list-group-item clearfix" (click)="OnSelectedRecipe()">
    <div class="pull-left">
      <h4 class="list-group-item-heading">{{recipe.name}}</h4>
      <p class="list-group-item-text">{{recipe.description}}</p>        
    </div>
    <span class="pull-right">
      <img src="{{recipe.imagePath}}" alt="{{recipe.name}}" class="img-responsive" style="max-height: 50px;">
    </span>
  </a>
```

Step2 : add recipeSelected to listen the event from outside add @output

recipe-item-component.ts
```
export class RecipeItemComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<void>();

  OnSelectedRecipe(){
    this.recipeSelected.emit();
  }

}
```

Step3 : Now go inside list componnet  and listen recipeSelected here

recipe-list-component.ts

```
 <div class="row">
    <div class="col-xs-12">    
      <app-recipe-item *ngFor="let recipeElement of recipes" 
      [recipe]="recipeElement"
      (recipeSelected)="onRecipeSelected(recipeElement)"></app-recipe-item>
    </div>
   </div>
```

Step 4 :

Now go inside list componnet  and onRecipeSelected 

recipe-list-component.ts

```
 @Output() recipewasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){
    this.recipewasSelected.emit(recipe)
  }

```

Step 5 : Now we will go inside 
recipes.component.html

```
<div class="row">
  <div class="col-md-5">
    <app-recipe-list (recipewasSelected)="selecetdRecipe=$event"></app-recipe-list>
  </div>
  <div class="col-md-7">
    <app-recipe-details ></app-recipe-details>
  </div>
</div>
```

Step 6 : 

we will add if condition for app-recipe-detail 

recipes.component.html
```
<div class="row">
  <div class="col-md-5">
    <app-recipe-list (recipewasSelected)="selecetdRecipe=$event"></app-recipe-list>
  </div>
  <div class="col-md-7">
    <app-recipe-details 
    *ngIf="selecetdRecipe;else infoText"></app-recipe-details>
    <ng-template #infoText>
      <p>Please Select the Recipe</p>
    </ng-template>
  </div>
</div>
```
Step 7 : recipes.component.ts add selecetdRecipe

```

export class ReceipesComponent implements OnInit {
  selecetdRecipe: Recipe;
  constructor() { 
    this.selecetdRecipe=new Recipe("","","")
  }
```

Step 8 : Go Inside the 

recipe-detail.component.ts

```
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeDe: Recipe;
  constructor() {
    this.recipeDe=new Recipe("","","")
   }
}
```

Step 9 : Go Inside recipe.component.html

and bind to that compoent

```
<div class="row">
  <div class="col-md-5">
    <app-recipe-list (recipewasSelected)="selecetdRecipe = $event"></app-recipe-list>
  </div>
  <div class="col-md-7">
    <app-recipe-details 
    *ngIf="selecetdRecipe;else infoText"
    [recipeDe]="selecetdRecipe"></app-recipe-details>
    <ng-template #infoText>
      <p>Please Select the Recipe</p>
    </ng-template>
  </div>
</div>
```

Step 10 : 
Go inside recipe-detail.component.html and bide the name and description
```
<div class="row">
    <div class="col-xs-12">
      <img 
      [src]="recipeDe.imagePath" 
      alt="{{recipeDe.name}}"
      class="img-responsive" 
      style="max-height: 400px;">
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h1>{{recipeDe.name}}</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col-xs-12">
      <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toogle">Manage recipe <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a href="#">To shopping list</a></li>
          <li><a href="#">Edit recipe</a></li>
          <li><a href="#">Delete recipe</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <p>{{recipeDe.description}}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      Ingredients
    </div>
  </div>
```

