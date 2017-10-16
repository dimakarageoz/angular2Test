import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMiddleware]'
})
export class MiddlewareDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
