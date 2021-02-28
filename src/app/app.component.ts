import { Component } from '@angular/core';

// component decorator: properties about your component
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
    
// component logic; where your code goes
export class AppComponent {
    title = 'class.tv';
}
