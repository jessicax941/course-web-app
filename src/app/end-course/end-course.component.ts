import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-end-course',
    templateUrl: './end-course.component.html',
    styleUrls: ['./end-course.component.css']
})
export class EndCourseComponent implements OnInit {

    finalScore: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

}
