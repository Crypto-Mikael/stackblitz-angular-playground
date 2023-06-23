import 'zone.js/dist/zone';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feat-angular-async-input-output-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `feat-angular-async-input-output-component.html`,
})
export class FeatAngularAsyncInputOutputComponent {
  @Input() count: undefined;
  // count2: number | undefined;
  @Output() sum = new EventEmitter();
  @Output() sub = new EventEmitter();
  @Output() reset = new EventEmitter();
}
