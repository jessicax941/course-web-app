import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
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
    

}
