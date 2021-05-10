import { Component, ElementRef, OnInit, ViewChild ,EventEmitter, Output} from '@angular/core';
import { Ingriedent } from 'src/app/shared/indigrient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingriedent>();

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  onAdditem(){
const newingredientAdded=new Ingriedent(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value)
this.ingredientAdded.emit(newingredientAdded);  
}

}
