import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { TaskStatus } from './enums/task-status.enum';

@Directive({
  selector: '[appStatusColor]',
})
export class StatusColorDirective {
  @Input('status') status!: TaskStatus;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    let color = '';

    switch (this.status) {
      case TaskStatus.EN_COURS:
        color = 'blue';
        break;
      case TaskStatus.A_FAIRE:
        color = 'red';
        break;
      case TaskStatus.TERMINEE:
        color = 'green';
        break;
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
