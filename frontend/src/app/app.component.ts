import { Component, Input, OnInit } from '@angular/core';
import {ButtonComponent} from './button/button.component';
import {NavbarVerticalComponent} from './navbar-vertical/navbar-vertical.component'
import {NavbarHorizontalComponent} from './navbar-horizontal/navbar-horizontal.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){

  }
  title = 'frontend';

  changeProperty(change: string){
    this.title = change
    console.log(change);
    console.log(this.title)

  }

}
