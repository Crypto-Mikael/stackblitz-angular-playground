import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { UiComponentComponent } from './ui-component/ui-component.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [UiComponentComponent],
  template: `<app-ui-component></app-ui-component>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
