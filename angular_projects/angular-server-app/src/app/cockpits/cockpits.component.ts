import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpits',
  templateUrl: './cockpits.component.html',
  styleUrls: ['./cockpits.component.css']
})
export class CockpitsComponent implements OnInit {

  @Output('srvCreate') serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';

  @ViewChild('servernamesInput') servernamesInputva: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  areInputsValid(): boolean {
    return this.newServerName !== '' && this.newServerContent !== '';
  }

  clearInputs(): void {
    this.newServerName = this.newServerContent = '';
  }

  checkEmitClear(emit: Function): void {
    if (this.areInputsValid()) {
      emit();
      this.clearInputs();
    }
  }

  onAddServer1(name): void {
    console.log(name.value)
    this.checkEmitClear( () => {
      this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
    });
  }

  onAddServer(): void {
    console.log(this.servernamesInputva.nativeElement.value)
    this.checkEmitClear( () => {
      this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
    });
  }

  onAddBlueprint(): void {
    this.checkEmitClear( () => {
      this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
    });
  }

}