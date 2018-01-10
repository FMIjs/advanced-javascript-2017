import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() completed: boolean;
  @Input() title: string;

  @Output() statusChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onChange(val: boolean) {
    this.statusChange.emit(val);
  }

}
