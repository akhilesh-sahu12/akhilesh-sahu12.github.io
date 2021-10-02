const quizeDB=[
 {
    question: "Q1: ______ they the first customers of the day?",
    a: "Who",
    b: "What",
    c: "Were",
    d: "Was",
    ans: "ans3"
 }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

let questionCount=0;
const loadQuestion=()=>{
    const questionList=quizeDB[questionCount];
    question.innerHTML= quizeDB[0].question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
}
loadQuestion();

submit.addEventListener('click')
