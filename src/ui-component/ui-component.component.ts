import { Component, OnInit } from '@angular/core';
import { FeatComponentComponent } from '../feat-component/feat-component.component';

@Component({
  selector: 'app-ui-component',
  standalone: true,
  templateUrl: './ui-component.component.html',
  styleUrls: ['./ui-component.component.css'],
  imports: [FeatComponentComponent],
})
export class UiComponentComponent implements OnInit {
  constructor() {}

  count: number = 0;
  sum = () => this.count++;
  sub = () => this.count--;
  reset = () => (this.count = 0);

  ngOnInit() {}
}
