import { Component, OnInit } from '@angular/core';
import { Ingriedent } from '../shared/indigrient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  indigrients : Ingriedent[] = [ new Ingriedent("Apple", 1), new Ingriedent("Mango", 6)];

  constructor() { }

  ngOnInit(): void {
  }

}
