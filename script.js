let jobInput = document.getElementById("job");
let salaryInput = document.getElementById("salary");
let teamInput = document.getElementById("team");
let holidayInput = document.getElementById("holiday");
let answerBtn = document.getElementById("answer-btn");
let okOut = document.querySelector(".ok-out");
let failOut = document.querySelector(".fail-out");

okOut.classList.add("d-none");
failOut.classList.add("d-none");
okOut.classList.remove("d-block");
failOut.classList.remove("d-block");

answerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let job = jobInput.checked;
  let salary = salaryInput.checked;
  let team = teamInput.checked;
  let holiday = holidayInput.checked;

  if (!job && !salary && !team && !holiday) {
    okOut.classList.remove("d-block");
    okOut.classList.add("d-none");
    failOut.classList.remove("d-block");
    failOut.classList.add("d-none");
    return
  }
 
  if ((job && team && salary && !holiday) || (job && salary && team &&!holiday)) {
    okOut.classList.remove("d-none");
    okOut.classList.add("d-block");
    failOut.classList.remove("d-block");
    failOut.classList.add("d-none");
  } else {
    failOut.classList.remove("d-none");
    failOut.classList.add("d-block");
    okOut.classList.remove("d-block");
    okOut.classList.add("d-none");
  }
})