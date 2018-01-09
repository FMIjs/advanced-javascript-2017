import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() body: string;
  @Input() title: string;
  @Input() id: number;

  @Output() btnClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  postClick() {
    this.btnClick.emit(this.id);
  }

}
