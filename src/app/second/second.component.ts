import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template:  `
    <div class="middleware">
      Form inside me
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./second.component.css']
})
export class SecondComponent { }
