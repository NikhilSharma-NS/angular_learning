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


Step 6 : 

