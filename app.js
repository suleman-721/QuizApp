

function populate() {
    if (quiz.isEnded()) {
        showScroes();
    }
    else {
      
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;
          
            var choices = quiz.getQuestionIndex().choices;
            for(var i = 0; i< choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
   showProgress();
 }
};


function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
    quiz.guess(guess);
    populate();

}
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length; 
};
function showScroes(){
var result = "<h1>Result</h1>";
result += "<h2>Total Question: 10</h2>" +"<h2 id='score'> Your Score: "+ quiz.score +" </h2>";
var element = document.getElementById("quiz");
if(quiz.score <=4){
    element.innerHTML=result+"<h2>Sorry you are failed.!!</h2>"
}else{
     element.innerHTML=result+"<h2>Congratulations you have passed the test.!!</h2>"+"<br/><br/><br/>"
}


};


var questions = [
new Question("HTML tags are used to describe document ___________.",["Content","Definition","Definition","None of these"],"Content"),
new Question("____ is block level element?",["p","div","h1","all"],"all"),
new Question("Page Designed in HTML is called as ________.",["Front Page","Yellow Page","Server Page","Web Page"],"Web Page"),
new Question("____ is inline element?",["p","div","span","all"],"span"),
new Question("Which language is used for styling the web pages?", ["html","css","php","javascript"],"css"),
new Question("There are how many Heading Tags?",["3","4","6","8"], "6"),
new Question("css stands for",["cascade style sheet","cast standard sheet","catching style sheet","all"],"cascade style sheet"),
new Question("'li' stands for",["list","list inline","line in","all"],"list inline"),
new Question("Which of the following property is used to change the face of a font?",["font-family","font-style","font-variant","font-weight"],"font-family"),
new Question(" Which of the following is used increase the row height?",["cellspacing","cellpadding","row span","col span"],"row span")

    ];  
    var quiz = new Quiz(questions);
    populate();


