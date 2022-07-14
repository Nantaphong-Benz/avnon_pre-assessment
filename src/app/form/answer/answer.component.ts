import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html'
})
export class AnswerComponent implements OnInit {
  answerValue: any;
  question: any;
  checkboxList: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { data: string };
    this.answerValue = state.data;
  }

  ngOnInit(): void {
    this.question = this.answerValue[0];
    this.checkboxList = this.answerValue[1];
  }

  backToBuilder() {
    this.router.navigate(['/form/builder'])
  }
}
