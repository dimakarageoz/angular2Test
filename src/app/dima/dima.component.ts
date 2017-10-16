import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dima',
  template: `
    <div class="middleware">
      Middleware component
      <app-second>
        <ng-content></ng-content>
      </app-second>
    </div>
  `,
  styleUrls: ['./dima.component.css']
})
export class DimaComponent { }
