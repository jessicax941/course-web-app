import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-end-course',
    templateUrl: './end-course.component.html',
    styleUrls: ['./end-course.component.css']
})
export class EndCourseComponent implements OnInit, OnDestroy {

    finalScore: number = 0;
    subscription: Subscription;

    constructor(private _courseService: CourseService) { }

    ngOnInit(): void {
        this.subscription = this._courseService.currentScore.subscribe(score => this.finalScore = score);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
