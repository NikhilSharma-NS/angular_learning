## Step1

What is angular

Angular is a JavaScript Framework which allows you to create reative single page Applications(SPAs)

AngularjS vs Angular 2

AngularjS -> js

Angular 2 and more -> angular is migrated into angular 2 (complte Re-Write)

## Step 2 

1) Install NodeJS
2) update/install the npm and cli
npm install -g npm (updating npm)

updating cli
npm uninstall -g angular-cli @angular/cli
npm cache verify
npm install -g @angular/cli


## Step 3

For creating first angular application
1) to update the latest package of npm
npm install -g @angular/cli@latest
for mac/linux : sudo npm install -g @angular/cli@latest

2) ng new my-first-app

3) cd my-first-app

4) ng serve

# Step 4

We will update the app

1) add below section in html file

```
<div>
  <input type="text" [{ngModel}]="name">
  <p>{{name}}</p>
</div>
```

if we will get error : cat't Bind to ngModel 
so we need to do the entry(FormsModule) in the app.module.js in imports section from @angular/forms


1) Angular BAsics
2) Components and Data Binding
3) Directive
4) Services and Dependency Injection
5) Routing
6) Observables
7) Forms 
8) Pipes
9) Http
10) Authentication
11) Optimazation and NgModule
12) Deployment
13) Animations and Testing


What is TypeScript

More features than vanilla JS(eg: Types,Classes,Interfaces)

TypeScript Compiled to JavaScript
--


For Install Boot Strap in project
1)npm install --save bootstrap@3
2)add the below line in angular.json styles section
node_modules/bootstrap/dist/css/bootstrap.min.css










