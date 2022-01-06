var displayQuestion = document.getElementById("displayQuestion");
var answerParent = document.getElementById("answerParent");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var questionDisplay = document.getElementById("questionDisplay");
var resultDisplay = document.getElementById("resultDisplay");

var indexValue = 0;
var marks = 0;

var question = [
    {
        question: "HTML Stand For __________",
        option : ["Hyper Text Markup Language","Hypo Text Markup Language","Hyper Text Makeup Language","CasCading Style Sheet"],
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "Css Stand For __________",
        option : ["Hyper Text Markup Language","Hypo Text Markup Language","Hyper Text Makeup Language","CasCading Style Sheet"],
        correctAnswer: "CasCading Style Sheet",
    },
    {
        question: "IP Stand For __________",
        option : ["Hyper Text Markup Language","Internet Protocol","Hyper Text Makeup Language","CasCading Style Sheet"],
        correctAnswer: "Internet Protocol",
    },
    {
        question: "OOP Stand For __________",
        option : ["Hyper Text Markup Language","Hypo Text Markup Language","Object Oriented Programming","CasCading Style Sheet"],
        correctAnswer: "Object Oriented Programming",
    },
    {
        question: "EPG Stand For __________",
        option : ["Electronic Programming Guide","Hypo Text Markup Language","Hyper Text Makeup Language","CasCading Style Sheet"],
        correctAnswer: "Electronic Programming Guide",
    },
    {
        question: "FAT Stand For __________",
        option : ["Hyper Text Markup Language","File Allocation Table","Hyper Text Makeup Language","CasCading Style Sheet"],
        correctAnswer: "File Allocation Table",
    },
];
// console.log(question);
function rendarQuestion(){
    displayQuestion.innerHTML = question[indexValue].question;
    for(var i=0; i<question[indexValue].option.length; i++){
        var obtainValue = question[indexValue].option[i];
        var correctValue = question[indexValue].correctAnswer;
        answerParent.innerHTML += `<div class="col-md-6 p-1" >
        <button onclick="checkQuestion('${obtainValue}','${correctValue}')" class="w-100 mt-5 p-3 optionWidth  rounded-pill text-black shadow bg-white  text-center">${obtainValue}</button>
      </div>`
    }

    totalQuestion.innerHTML = question.length;
    currentQuestion.innerHTML = indexValue +1;
}


rendarQuestion();

function nextQuestion(){

    answerParent.innerHTML ="";
    if(indexValue +1 == question.length){
        alert("your Marks is "+ marks)
        var percentage = marks/question.length*100
        resultDisplay.innerHTML=`<h1>Your Marks is <span>${percentage}</span>%</h1>`
        resultDisplay.style.display = 'block';
        questionDisplay.style.display = 'none';

    }else{
        indexValue++;
    rendarQuestion();
    }
    
}

function checkQuestion(optionValue,correctValue){
    if(optionValue == correctValue){
        marks++;
        console.log(marks);
    };

    nextQuestion()
} 