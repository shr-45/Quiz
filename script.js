const ques=[
    {
        question: "The CSS property used to specify the transparency of an element is -",
        answers:[
            {text:"filter", correct:false},
            {text:"opacity", correct:true},
            {text:"visibility", correct:false},
            {text:"overlay", correct:false},
        ] 
    },
    {
        question: "What is the function of the HTML style attribute?",
        answers:[
            {text:"It is used to add styles to an HTML element.", correct:true},
            {text:"It is used to uniquely identify specific styles of some element.", correct:false},
            {text:"Both of the above.", correct:false},
            {text:"None of the above.", correct:false},
        ]
    },
    {
        question: "What is the effect of the b tag?",
        answers:[
            {text:"It converts text within it to bold font.", correct:true},
            {text:"It is used to write black-colored font.", correct:false},
            {text:"It is used to change the font size.", correct:false},
            {text:"None of the above.", correct:false},
        ]
    },
    {
        question: "The CSS property used  to make the text bold is-",
        answers:[
            {text:"weight:bold", correct:false},
            {text:"font-weight:bold", correct:true},
            {text:"font:bold", correct:false},
            {text:"style:bold", correct:false},
        ]
    },
    {
        question: "The property in CSS used to change the background color of an element is -",
        answers:[
            {text:"bgcolor", correct:false},
            {text:"color", correct:false},
            {text:"background-color", correct:true},
            {text:"All of the above", correct:false},
        ]
    },
    {
        question: "Which of the following is used to specify the subscript of text using CSS?",
        answers:[
            {text:"vertical-align: super", correct:false},
            {text:"vertical-align: subscript", correct:false},
            {text:"vertical-align: sup", correct:false},
            {text:"vertical-align: sub", correct:true},
        ]
    },
    {
        question: " JavaScript is ___ language.",
        answers:[
            {text:"Object-Oriented", correct:false},
            {text:"Assembly-language", correct:false},
            {text:"High-level", correct:false},
            {text:"Object-Based", correct:true},
        ]
    },
    {
        question: "Which one of the following also known as Conditional Expression?",
        answers:[
            {text:"immediate if", correct:true},
            {text:"If-then-else statement", correct:false},
            {text:"Switch statement", correct:false},
            {text:"Alternative to if-else", correct:false},
        ]
    },
    {
        question: "Which of the following HTML attribute is used to define inline styles?",
        answers:[
            {text:"type", correct:false},
            {text:"style", correct:true},
            {text:"class", correct:false},
            {text:"None of the above", correct:false},
        ]
    },
    {
        question: "What are the types of unordered or bulleted list in HTML?",
        answers:[
            {text:"disc, circle, square", correct:true},
            {text:"polygon, triangle, circle", correct:false},
            {text:"disc, square, triangle",correct:false},
            {text:"All of the above", correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-btn");
const nextButton=document.getElementById("next-btn");
let currentQuesindex=0;
let score=0;
function startQuiz(){
    currentQuesindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQues=ques[currentQuesindex];
    let questionNo=currentQuesindex + 1;
    questionElement.innerHTML= questionNo+ ". "+currentQues.question;

    currentQues.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${ques.length}!`;
    nextButton.innerHTML="Take Quiz Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuesindex++;
    if(currentQuesindex<ques.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuesindex<ques.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();