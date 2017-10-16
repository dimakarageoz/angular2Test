import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {MiddlewareDirective} from './middleware.directive';
import {DynamicCompComponent} from './dynamic-comp/dynamic-comp.component';
import {SelectBlockComponent} from './select-block/select-block.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
      Main component
      <app-dima>
        <ng-template appMiddleware></ng-template>
      </app-dima>
      <div>
        <button (click)="createComp('Input')">Input Block</button>
        <button (click)="createComp('Select')">Select block</button>
      </div>
      <div>
        <p>CheckElement: {{checkElement}}</p>
        <p>InputText: {{inputText}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MiddlewareDirective) adHost: MiddlewareDirective;

  public checkElement = '';
  public inputText = '';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  private createComp(type: string) {

    const componetFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        type === 'Input'
        ? DynamicCompComponent
        : SelectBlockComponent // content can be come from server
      )
    ;
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componetFactory);

    componentRef.instance.content = {
      type: type,
      action: this.action,
      selectAction: this.selectAction,
      select: [
        'Dima',
        'Dog',
        'Key',
        'Olga',
        'Iphone',
        'Yeeeeaah boooyy!!',
        'Oleg',
        'Batman',
        'Skr-skr!'
      ]
    };
  }

  public selectAction = (checkElement) => {
    console.log(this.checkElement, checkElement);
    this.checkElement = checkElement;
  }

  public action = (text) => {             // We pass function with parent context.
    console.log(this.inputText, text);    // Arrow function (=>) have auto binding
    this.inputText = text;                // to context where function was initialized,
  }                                       // without (=>) you should make .bind(this)
                                          // in class constructor.

}
