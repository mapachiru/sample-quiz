let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;

window.onload = function(){
    initQuiz();
    initRestartButton();
};

function initRestartButton() {
    let restartButton = document.querySelector(".restart-quiz");
    restartButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
    // Redirect to the first question or home page
    location.href = "index.html"; // Change this URL accordingly
}
