import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

    score: number = 0;
    correctScore: number = 10;
    subscription: Subscription;

    constructor(private courseService: CourseService) {
        // this.score = 0;
    }

    ngOnInit(): void {
        this.subscription = this.courseService.currentScore.subscribe(score => this.score = score);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
