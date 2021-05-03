import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent implements OnInit {

  // alias found in template
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}