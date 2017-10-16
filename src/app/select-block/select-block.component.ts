import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-block',
  template: `
    <div class="dynamic-div">
      <h3><span>{{content.type}}</span> Form</h3>
      <select (change)="this.content.selectAction(selectBlock.value)" #selectBlock>
        <option *ngFor="let item of content.select">
          {{item}}
        </option>
      </select>
    </div>
  `,
  styleUrls: ['./dynamic-comp.component.css']
})
export class SelectBlockComponent {

  @Input() content: Object;

}
