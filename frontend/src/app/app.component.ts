import { Component, Input, OnInit } from '@angular/core';
import {ButtonComponent} from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){

  }
  title = 'frontend';
  @Input() value = this.title;

  changeProperty(change: string){
    this.title = change
    console.log(change);
    console.log(this.title)

  }

}
