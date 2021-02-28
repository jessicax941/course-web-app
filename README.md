# Course web app

### Features implemented
- Home page (start the course)
- Video page (watch video and move on to next section)
- Quiz page (answer question, display message based on whether question was answered correctly and move on to next section)
- End of course page (replay the course by returning to home page)

### Methods attempted while trying to implement scoring system
1. Child component (`QuizComponent`) sends data to parent component (`CourseComponent`)
- `Output()` and `EventEmitter`
- `@ViewChild` decorator
2. Child component (`QuizComponent`) sends data to service (`CourseService`), while parent component (`CourseComponent`) retrieves from service
- `RxJS Behaviour Subject`
