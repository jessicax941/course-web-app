import { Component } from '@angular/core';
import { CourseService } from './course.service';

// component decorator: properties about your component
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ CourseService ],
})
    
// component logic; where your code goes
export class AppComponent {
    title = 'class.tv';

    score: number;
    correctScore: number = 10;

    courseService: CourseService;

    constructor(private _courseService: CourseService) {
        this.courseService = _courseService;
        this.score = 0;
    }

    addScoreForCorrectAnswer(bool: boolean) {
        if (bool) {
            this.score += this.correctScore;
            console.log("app.component score", this.score);

        }
    }
}
