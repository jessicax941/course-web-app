import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { VideoComponent } from './video/video.component';
import { EndCourseComponent } from './end-course/end-course.component';
import { CourseComponent } from './course/course.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        QuizComponent,
        VideoComponent,
        EndCourseComponent,
        CourseComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: '', component: CourseComponent, children: [
                { path: 'video/:id', component: VideoComponent },
                { path: 'quiz/:id', component: QuizComponent },
                { path: 'end', component: EndCourseComponent },
            ] },
        ]),
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
