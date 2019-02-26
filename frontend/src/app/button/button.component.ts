import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() titleChanged = new EventEmitter<string>();
  toPass = "Hello";
  constructor() { }
  public handleClick(){
    console.log("Called");
    this.titleChanged.emit(this.toPass);


  }


}
