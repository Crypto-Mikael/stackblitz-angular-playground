import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UiAngularAsyncInputOutputComponent } from './ui-angular-async-input-output/ui-angular-async-input-output.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UiAngularAsyncInputOutputComponent],
  template: `<ui-angular-async-input-output-component></ui-angular-async-input-output-component>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
