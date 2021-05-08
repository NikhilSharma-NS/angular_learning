### Create the App

Step 1) plan the app

```
                        Root(Component)
                        Header(Component)
    Shopping List (Feature)             Recipe Book(Feature)
    
    Shopping List(Component)            Recipe Book(Component)
    Shopping List Edit (Component)      Recipe Item(Component)
                                        Recipe Detail (Component)
    Ingredient(Model)                   Recipe(Model)


```

Step 2: Create the app
ng new shopping-app
Step 3: 

Install Bootstrap

npm install --save bootstrap@3

And set the path in angular.json in the styles[] array

node_modules/bootstrap/dist/css/bootstrap.min.css

Step 4: remove all the data from app.component.html

Run ng serve

navigate on http://localhost:4200

Step 5: Creating the Component

1) inside app folder run below command to create the header component

ng g c header

it will create the Header component inside header folder

2) Create more Component

ng g c recipes

ng g c recipes/recipe-list

ng g c recipes/recipe-detail

ng g c recipes/recipe-list/recipe-item

ng g c shopping-list

ng g c shopping-list/shopping-edit


Step 6 : Using the Component

1) Inside app.component.html
```
<app-header><app-header>
<div class="container">
  <div class="row">
      <div class="col-md-12">
         <app-recipes></app-recipes>
         <app-shopping-list></app-shopping-list>
      </div>
  </div>
</div>
```
2) Inside recipes.component.html
```
<div class="row">
      <div class="col-md-5">
         <app-recipe-list></app-recipe-list>
      </div>
       <div class="col-md-7">
         <app-recipe-detail></app-recipe-detail>
      </div>
</div>
```

3)  Inside recipe.list.html

```
<app-recipe-item></app-recipe-item>
    
```

4) Inside Shopping.list.html

```
<div class="row">
      <div class="col-xs-10">
         <app-shopping-edit></app-shopping-edit>
         <hr>
         <p>The list</p>
      </div>
</div>
```

Step 7 : Adding the Navigation Bar

header.component.html

```
<nav class="navbar navbar-default">
   <div class="container-fluid">
     <div class="navbar-header">
        <a href="#" class="navbar-brand">Receipe Book</a>
     </div>
    <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
         <li><a href="#" >Receipes</a></li>
         <li><a href="#" >Shopping list</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" role="button">Manage<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" >Save Data</a></li>
                <li><a href="#" >Fetch Data</a></li>
              </ul>
          </li>
        </ul>

     </div>
 
   </div>
 
</nav>
```

Step 8 : 

Creating a Recipe Model in recipes folder

recipes/recipe.model.ts 

```

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name, description, imagePath) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
```

Step 9:Adding the content to the Recipes Components

1)create the array of recipe(recipe-list.component.ts)

```

export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[new Recipe('A test','this is simple','path of image')]

 ``` 

 2) Now inside receipe list html file

 ```
 <div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button>
  </div>
</div>
<hr>
<div class="row">
  <div class="col-xs-12">    
     <a href="#" class="list-group-item clearfix">
      <div class="pull-left">
        <h4 class="list-group-item-heading">Recipe Name</h4>
        <p class="list-group-item-text">Description</p>        
      </div>
      <span class="pull-right">
        <img src="" alt="" class="img-responsive" style="max-height: 50px;">
      </span>
    </a>
    <app-recipe-item></app-recipe-item>
  </div>
</div>

 ```


Step 10:outputting a list of recipes with ngFor

in recipe-list.componnet.html file

```
 <div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button>
  </div>
</div>
<hr>
<div class="row">
  <div class="col-xs-12">    
     <a href="#" class="list-group-item clearfix *ngFor="let recipe of recipes;">
      <div class="pull-left">
        <h4 class="list-group-item-heading">{{ recipe.name }}</h4>
        <p class="list-group-item-text">{{ recipe.description }}</p>        
      </div>
      <span class="pull-right">
        <img src="{{ recipe.image }}" alt="{{ recipe.name }}" class="img-responsive" style="max-height: 50px;">
      </span>
    </a>
    <app-recipe-item></app-recipe-item>
  </div>
</div>

 ```

 Step 11:Display Recipe Details

 inside recipe-detail.componnet.html

 ```
 <div class="row">
  <div class="col-xs-12">
    <img [src]="" alt="" class="img-responsive" style="max-height: 300px">
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    <h1>Recipe Name</h1>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    <div class="btn-group" appDropdown>
      <button type="button" class="btn btn-primary dropdown-toggle">
        Manage Recipe <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a style="cursor: pointer" >To Shopping List</a></li>
        <li><a style="cursor: pointer" >Edit Recipe</a></li>
        <li><a style="cursor: pointer" >Delete Recipe</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    Recipe Des
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    ingredient
  </div>
</div>

 ```

Step 12:Working on Shopping list Component

Inside shopping-list.component.html

```
<div class="row">
  <div class="col-xs-10">
    <app-shopping-edit></app-shopping-edit>
    <hr>
    <ul class="list-group">
      <a 
        class="list-group-item"
        style="cursor: pointer"></a>
    </ul>
  </div>
</div>
```

Step 13 : Creating an ingredient Model inside shared folder

this is feature of type script we don't need to declare the variable and assign it.
in the constrtuctor if we will make it public it will consider as declare and assigned

```
export class Ingredient {
    // TS shortcut.
    constructor(public name: string, public amount: number) { }
}
```

Step 14 : Creating and Ouputting the Shopping list
1)Inside shopping-list.componnet.ts file

```

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[new Recipe('Apple',4),new Recipe('mango',4)]

 ``` 
2) Inside shopping-list.componnet.html file

```
<div class="row">
  <div class="col-xs-10">
    <app-shopping-edit></app-shopping-edit>
    <hr>
    <ul class="list-group">
      <a 
        class="list-group-item"
        style="cursor: pointer"
        *ngFor="let item of ingredients"
        >{{ item.name }} ({{ item.amount }})</a>
    </ul>
  </div>
</div>
```


Step 15 : Adding a shopping lit Edit Section

inside Shopping-edit.componnet.html

```
<div class="row">
  <div class="col-xs-12">
    <form >
      <div class="row">
        <div class="col-sm-5 form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            >
        </div>
        <div class="col-sm-2 form-group">
          <label for="amount">Amount</label>
          <input
            type="number"
            id="amount"
            class="form-control"
            >
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 btn-toolbar">
          <button class="btn btn-success" type="submit"</button>
          <button
            class="btn btn-danger"
            type="button"
           >Delete</button>
          <button class="btn btn-primary" type="button" >Clear</button>
        </div>
      </div>
    </form>
  </div>
</div>
```


Step 16 : Adding a shopping lit Edit Section