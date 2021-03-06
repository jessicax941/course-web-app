import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Question } from '../question.model';
import { QuizService } from '../quiz.service';
import { Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
    providers: [ QuizService ]
})
export class QuizComponent implements OnInit, OnDestroy {

    quizTitle: string = "quiz title";
    quizId: number = 0;
    question: Question;
    questionString: string;
    options: string[];
    answer: string;
    hasAnswered: boolean;
    optionSelected: string;
    isCorrect: boolean;
    isLastQuestion: boolean;
    
    subscription: Subscription;
    currentScore: number;

    @Output() correctAnswerEvent = new EventEmitter<boolean>();
    @Output("addScoreForCorrectAnswer") addScoreForCorrectAnswer: EventEmitter<any> = new EventEmitter();

    constructor(private _Activatedroute: ActivatedRoute, private _quizService: QuizService,
        private _courseService: CourseService) {
        this.quizId = parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
        this.quizTitle = _quizService.getQuizTitle(this.quizId);

        this.question = _quizService.getQuestion(this.quizId);
        this.questionString = this.question.questionString;
        this.options = this.question.options;
        this.answer = this.question.answer;
        this.isLastQuestion = _quizService.isLastQuestion(this.quizId);
    }

    ngOnInit(): void {
        this.hasAnswered = false;
        this.optionSelected = "";
        this.isCorrect = false;
        this.subscription = this._courseService.currentScore.subscribe(score => this.currentScore = score);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    submitAnswer() {
        this.hasAnswered = true;
        this.checkAnswer();
    }

    checkAnswer() {
        if (this.optionSelected === this.answer) {
            this.isCorrect = true;
            this._courseService.incrementScore();
        } else {
            this.isCorrect = false;
        }
    }

}
