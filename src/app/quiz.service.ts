import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    quizTitles: string[] = [
        "Ramps: A Super, Simple Machine!​",
        "Ramps: Super Simple Machines: Levers",
        "Ramps: Need a Lift? Try a Pulley!",
        "Let's Get Rolling!",
        "The Power of Sunlight!",
        "Fun with Magnets!",
        "Make Your Own Sundial!",
        "The Coolest Machine Ever!",
    ];

    questionStrings: string[] = [
        "A machine is anything that helps us ______.",
        "In a lever, what is used to balance the long bar above it?",
        "What is a pulley made up of? A rope and a ______.",
        "Where do you see wheels and axles?",
        "What do solar panels do?",
        "A force can be a ______.",
        "What is the name of the device that uses the sun to tell time?",
        "What is a chain reaction?"
    ];

    options: string[][] = [
        [ "Do our homework", "Do work", "To sleep better" ],
        [ "Triangle", "Fulcrum", "Falcon" ],
        [ "Wheel", "Trolley", "String" ],
        [ "Book", "Scooter", "Keyboard" ],
        [ "Take in water and produce electricity", "Take food and eat it", "Take sunlight and turn it into electricity" ],
        [ "Push or a pull", "Kick or a punch", "Smile or a frown" ],
        [ "Sunshine", "Sundial", "Suntool" ],
        [ "When one action causes another thing to happen", "When one chain of thought causes another chain of thought", "When one is trapped in chains" ]
    ]

    answersIndex: number[] = [1, 1, 0, 1, 2, 0, 1, 0];
    questions: Question[] = [];

    constructor() {
        for (let i = 0; i < this.questionStrings.length; i++) {
            this.questions[i] = new Question(this.questionStrings[i], this.options[i], this.options[i][this.answersIndex[i]]);
        }
    }

    public getQuizTitle(id: number) {
        return this.quizTitles[id];
    }

    public getQuestions() {
        return this.questions;
    }

    public getQuestion(id: number) {
        return this.questions[id];
    }

    public isLastQuestion(id: number) {
        return this.questions.length - 1 == id;
    }

}
