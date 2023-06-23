import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-angular-async-input-output-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `ui-angular-async-input-output-component.html`,
})
export class UiAngularAsyncInputOutputComponent {
  count = 0;
  sum = () => this.count++;
  sub = () => this.count--;
  reset = () => (this.count = 0);
}
