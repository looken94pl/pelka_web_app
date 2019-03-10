import { Component, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.css']
})
export class WorkareaComponent implements OnInit {
  @Input() fill;
  constructor() { }

  ngOnInit() {
  }

}
