function populate(){
    if(quiz.isEnded()){
        showScore();
    } else {
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i=0;i<choices.length;i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
};
function guess (id,guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    };
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex+1;
    var element = document.getElementById('progress');
    element.innerHTML='Question '+ currentQuestionNumber+ " of "+ quiz.questions.length;
}

function showScore(){
    var gameOverHtml = "<h1> Result : </h1>";
    gameOverHtml+="<h2 id='score'> Your score :"+quiz.score+ "</h2>" +
                    "<a href='javascript:location.reload(true)''>Play Again</a>";
            var element = document.getElementById('quiz');
            element.innerHTML=gameOverHtml;

}

var questions = [
    new Question("Question1",["1","2","3","4"],"1"),
    new Question("Question2",["1","2","3","4"],"2"),
    new Question("Question3",["1","2","3","4"],"3"),
    new Question("Question4",["1","2","3","4"],"4")
];

var quiz = new Quiz(questions);
populate();
