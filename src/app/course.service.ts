import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root' // angular provides this service in the root injector -> available throughout the app
})
export class CourseService {

    correctScore: number = 10;
    private score = new BehaviorSubject(0);
    currentScore = this.score.asObservable();

    constructor() { }

    public getScore() {
        return this.score;
    }

    public incrementScore() {
        this.score.next(this.score.getValue() + this.correctScore);
    }

    public resetScore() {
        this.score.next(0);
    }
    

}
