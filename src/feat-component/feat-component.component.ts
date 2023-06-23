import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feat-component',
  standalone: true,
  templateUrl: './feat-component.component.html',
  styleUrls: ['./feat-component.component.css'],
  imports: [],
})
export class FeatComponentComponent implements OnInit {
  constructor() {}
  @Input() count: number | undefined;

  @Output() sum = new EventEmitter();
  @Output() sub = new EventEmitter();
  @Output() reset = new EventEmitter();

  ngOnInit() {}
}
