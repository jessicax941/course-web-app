import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit, OnDestroy {

    // @ViewChild(QuizComponent) quizComponent;
    score: number = 0;
    correctScore: number = 10;
    subscription: Subscription;

    constructor(private courseService: CourseService) {
        // this.score = 0;
    }

    ngOnInit(): void {
        this.subscription = this.courseService.currentScore.subscribe(score => this.score = score);
    }

    ngAfterViewInit() {
        // console.log("viewchild", this.quizComponent.isCorrect);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    // public addScoreForCorrectAnswer() {
    //     // if (bool) {
    //         this.score += this.correctScore;
    //         // console.log("course.component score", this.score);

    //     // }
    // }

}
