import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.scss']
})
export class AnswerButtonComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  

}
