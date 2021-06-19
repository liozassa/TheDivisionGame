import { Component, OnInit } from '@angular/core';
import { FizbazService } from '../shared/fizbaz.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blink: boolean;
  current_number: number;
  current_answer: string;
  correct_count: number;
  worng_count: number;

  constructor(private fizbazService: FizbazService) {
    this.worng_count = this.correct_count = this.current_number = 0;
    this.current_answer = '';
  }

  ngOnInit(): void {
  }

  setAnswer(result: string) {
    this.fizbazService.fizbaz(result, this.current_number) ? this.current_answer = 'Correct Answer!' : this.current_answer = 'Wrong Answer!';
    if (this.current_answer === 'Wrong Answer!') {
      this.worng_count += 1;
    } else {
      this.correct_count += 1;
    }

    this.blink = true;
    setTimeout(() => {
      this.current_number = Math.floor(Math.random() * 1000);
      this.current_answer = '';
      this.blink = false;
    }, 3000);
  }

  getFizbazMap() {
    return this.fizbazService.fizbaz_map;
  }

  

}
