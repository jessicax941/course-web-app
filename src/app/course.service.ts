import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    correctScore: number = 10;
    // score: number = 0;
    private score = new BehaviorSubject(0);
    currentScore = this.score.asObservable();

    constructor() {
        // var observable = Observable.create(function subscribe(observer) {
        //     observer.next('Hey guys!')
        // })
    }

    public getScore() {
        return this.score;
    }

    public incrementScore() {
        // this.score += this.correctScore;
        this.score.next(20);
        console.log("incrementscore", this.score.getValue());
    }
    

}
