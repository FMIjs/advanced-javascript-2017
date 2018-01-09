import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective implements OnChanges {
  @Input() appMyIf: boolean;

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  ngOnChanges() {
    if (this.appMyIf) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
