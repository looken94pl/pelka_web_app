import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  prop = "Hello";
  myfunc(){
    //this.getElementById("button").innerHTML("Clicked")
    this.prop = "Clicked";
  }



}
