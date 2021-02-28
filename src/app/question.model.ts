export class Question {

    public questionString: string = "";
    public options: string[] = [];
    public answer: string = "";

    constructor(question: string, options: string[], answer: string){
        this.questionString = question;
        this.options = options;
        this.answer = answer;
    }
    
}
