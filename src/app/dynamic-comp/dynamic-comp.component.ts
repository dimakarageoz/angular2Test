import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-comp',
  template: `
    <div class="dynamic-div">
      <h3><span>{{content.type}}</span> Form</h3>
      <input #inputText/>
      <button (click)="this.content.action(inputText.value)">
        Button
      </button>
    </div>
  `,
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent {

  @Input() content: Object;

}
