// Variable Initialization
var ammtCorrect = 0;
var finalScore = 0;
var isCorrectQ1 = null;
var isCorrectQ2 = null;
var isCorrectQ3 = null;
var isCorrectQ4 = null;
var isCorrectQ5 = null;
var isCorrectQ6 = null;
var isCorrectQ7 = null;
var isCorrectQ8 = null;
var isCorrectQ9 = null;
var isCorrectQ10 = null;

// Question Answer Elements
let q1a = document.getElementById("q1a");
let q2a = document.getElementById("q2a");
let q3a = document.getElementById("q3a");
let q4a = document.getElementById("q4a");
let q5a = document.getElementById("q5a");
let q6a = document.getElementById("q6a");
let q7a = document.getElementById("q7a");
let q8a = document.getElementById("q8a");
let q9a = document.getElementById("q9a");
let q10a = document.getElementById("q10a");

// Question Elements
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let q6 = document.getElementById("q6");
let q7 = document.getElementById("q7");
let q8 = document.getElementById("q8");
let q9 = document.getElementById("q9");
let q10 = document.getElementById("q10");

// Results and Error Elements
let resultsDiv = document.getElementById("results");
let resultCorrect = document.getElementById("resultCorrect");
let resultPercent = document.getElementById("resultPercent");
let errorBox = document.getElementById("errorBox");
let errorText = document.getElementById("errorText");

// Check Functions
function checkQ1() {
  return q1a.value == "q1a2";
}

function checkQ2() {
  return q2a.value == "q2a1";
}

function checkQ3() {
  return q3a.value == "q3a4";
}

function checkQ4() {
  return q4a.value == "q4a3";
}

function checkQ5() {
  return q5a.value == "q5a3";
}

function checkQ6() {
  return q6a.value == "q6a2";
}

function checkQ7() {
  return q7a.value == "q7a1";
}

function checkQ8() {
  return q8a.value == "q8a3";
}

function checkQ9() {
  return q9a.value == "q9a2";
}

function checkQ10() {
  return q10a.value == "q10a2";
}

// Answer Checking and Scoring
function checkAnswers() {
  var isCorrectQ1 = checkQ1();
  var isCorrectQ2 = checkQ2();
  var isCorrectQ3 = checkQ3();
  var isCorrectQ4 = checkQ4();
  var isCorrectQ5 = checkQ5();
  var isCorrectQ6 = checkQ6();
  var isCorrectQ7 = checkQ7();
  var isCorrectQ8 = checkQ8();
  var isCorrectQ9 = checkQ9();
  var isCorrectQ10 = checkQ10();

  function updateClass(question, isCorrect) {
    if (isCorrect === true) {
      question.classList.add("correct");
      question.classList.remove("incorrect");
    } else if (isCorrect === false) {
      question.classList.add("incorrect");
      question.classList.remove("correct");
    } else {
      errorBox.classList.remove("hidden");
      errorText.innerHTML =
        "Error, developer check Console <br /> Contact aliarseel1@gmail.com for support";
    }
  }

  updateClass(q1, isCorrectQ1);
  updateClass(q2, isCorrectQ2);
  updateClass(q3, isCorrectQ3);
  updateClass(q4, isCorrectQ4);
  updateClass(q5, isCorrectQ5);
  updateClass(q6, isCorrectQ6);
  updateClass(q7, isCorrectQ7);
  updateClass(q8, isCorrectQ8);
  updateClass(q9, isCorrectQ9);
  updateClass(q10, isCorrectQ10);

  // Count Correct Answers
  if (q1.classList.contains("correct")) ammtCorrect++;
  if (q2.classList.contains("correct")) ammtCorrect++;
  if (q3.classList.contains("correct")) ammtCorrect++;
  if (q4.classList.contains("correct")) ammtCorrect++;
  if (q5.classList.contains("correct")) ammtCorrect++;
  if (q6.classList.contains("correct")) ammtCorrect++;
  if (q7.classList.contains("correct")) ammtCorrect++;
  if (q8.classList.contains("correct")) ammtCorrect++;
  if (q9.classList.contains("correct")) ammtCorrect++;
  if (q10.classList.contains("correct")) ammtCorrect++;

  // Calculate Final Score
  finalScore = ammtCorrect * 10;
  resultsDiv.classList.remove("hidden");
  resultCorrect.innerHTML = "You got " + ammtCorrect + " Correct";
  resultPercent.innerHTML = "Final Score: " + finalScore + "%";

  // Reset for Next Check
  ammtCorrect = 0;
  finalScore = 0;
}
