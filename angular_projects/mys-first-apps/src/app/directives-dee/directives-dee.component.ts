import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-dee',
  templateUrl: './directives-dee.component.html',
  styleUrls: ['./directives-dee.component.css']
})
export class DirectivesDeeComponent implements OnInit {
  value = 15
  numbers = [1, 2, 3, 4, 5]
  oddNumber = [1, 3, 5]
  evenNumber = [2, 4]
  onlyOdd = false;
  constructor() { }

  ngOnInit(): void {
  }

}
