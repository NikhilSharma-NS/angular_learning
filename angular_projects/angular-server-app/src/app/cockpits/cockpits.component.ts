import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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

  onAddServer(): void {
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