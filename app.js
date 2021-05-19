const quizData = [
    {
        question: "How old is Neloy ?",
        a: '10',
        b: '18',
        c: '50',
        d: '80',
        correct: 'b'
    }, {
        question:'what is the most used programming language in 2019 ?',
        a:'Java',
        b:'Python',
        c:'C',
        d:'Javascript',
        correct:'d'
    }, {
        question:'Who is the President of US ?',
        a:'Florin Pop',
        b:'Donald Trump',
        c:'Ivan Saldano',
        d:'Joe Biden',
        correct:'d'
    }, {
        question:'What does HTML stand for ?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'Jason Object Notation',
        d:'Helicopters Terminals Motorboats Lambordinis',
        correct:'a'
    }, {
        question:'What year was JavaScript launched ?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'b'
    }
];

const quiz = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answer");
const questionEl =document.getElementById("question");

const a_text = document.getElementById("a-text"); 
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected(){

    let answer = undefined;

    answersEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
        });
}

submitBtn.addEventListener("click", () => {
    //check to see answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;  
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Relode</button>`;
        }
    }
});
