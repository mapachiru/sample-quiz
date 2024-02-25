let questions = [
    {
        id: 1,
        question: "What is the full form of RAM?",
        answer: "Random Access Memory",
        option:[
            "Run Accept Memory",
            "Random All Memory",
            "Random Access Memory",
            "None Of These"
        ]
    },
    {
        id: 2,
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
        option:[
            "Computer Processing Unit",
            "Central Processor Unit",
            "Computer Processor Unit",
            "Central Processing Unit"
        ]
    },
    {
        id: 3,
        question: "Which programming language is often used for web development?",
        answer: "HTML",
        option:[
            "Java",
            "Python",
            "HTML",
            "C++"
        ]
    },
    {
        id: 4,
        question: "Which of the following is a file storage device that uses magnetic storage?",
        answer: "HDD (Hard Disk Drive)",
        option:[
            "SSD (Solid State Drive)",
            "HDD (Hard Disk Drive)",
            "USB Flash Drive",
            "CD-ROM"
        ]
    },
    {
        id: 5,
        question: "Which of the following is a programming paradigm?",
        answer: "Object-Oriented",
        option:[
            "Algorithm",
            "Compiler",
            "Object-Oriented",
            "Syntax"
        ]
    },
    {
        id: 6,
        question: "What does HTML stand for in the context of web development?",
        answer: "HyperText Markup Language",
        option:[
            "High-level Text Management Language",
            "HyperText Markup Language",
            "Hyper Transferable Markup Language",
            "Human Textual Manipulation Language"
        ]
    },
    {
        id: 7,
        question: "Which networking protocol is used to retrieve emails?",
        answer: "POP3 (Post Office Protocol version 3)",
        option:[
            "SMTP (Simple Mail Transfer Protocol)",
            "FTP (File Transfer Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "POP3 (Post Office Protocol version 3)"
        ]
    },
    {
        id: 8,
        question: "What is the purpose of a firewall in a computer system?",
        answer: "Network security",
        option:[
            "Virus protection",
            "Data encryption",
            "Network security",
            "File organization"
        ]
    },
    {
        id: 9,
        question: "What is the purpose of a GPU in a computer?",
        answer: "Graphics Processing Unit",
        option:[
            "Generate Power Unit",
            "Graphics Processing Unit",
            "General Processing Unit",
            "Gaming Processing Unit"
        ]
    },
    {
        id: 10,
        question: "What does the acronym URL stand for?",
        answer: "Uniform Resource Locator",
        option:[
            "Universal Resource Locator",
            "Uniform Resource Locator",
            "Unified Resource Locator",
            "Universal Reference Locator"
        ]
    }
];

let question_count = 0;
let points = 0;

window.onload = function(){
    initQuiz();
};

function initQuiz() {
    show(question_count);
}

function show(count){
    let questionElement = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].option;

    questionElement.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option__group">
        <li class="option">${first}</li>
        <li class="option">${second}</li>
        <li class="option">${third}</li>
        <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++){
        option[i].onclick = function(){
            for (let i = 0; i < option.length; i++){
                if (option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){
    // Check if any option is selected
    let selectedOption = document.querySelector("li.option.active");
    if (!selectedOption) {
        alert("Please select an option before moving to the next question.");
        return;
    }

    // Check the user's answer
    let user_answer = selectedOption.innerHTML;
    if (user_answer == questions[question_count].answer){
        points += 10;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    // Increment question_count and show the next question
    question_count++;

    // Check if it's the last question
    if (question_count == questions.length){
        location.href = "final.html";
        return;
    }

    show(question_count);
}

// ... (Your existing code)

function restartQuiz() {
    // Reset question_count and points
    question_count = 0;
    points = 0;
    
    // Redirect to the first question or home page
    location.href = "quiz.html"; // Change this URL accordingly
}

