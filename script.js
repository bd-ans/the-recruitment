let jobInput = document.getElementById("job");
let salaryInput = document.getElementById("salary");
let teamInput = document.getElementById("team");
let holidayInput = document.getElementById("holiday");
let anwerBtn = document.getElementById("answer-btn");
let okOut = document.querySelector(".ok-out");
let FailOut = document.querySelector(".fail-out");

okOut.classList.add("d-none");
FailOut.classList.add("d-none");
okOut.classList.remove("d-block");
FailOut.classList.remove("d-block");

anwerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let job = jobInput.checked;
  let salary = salaryInput.checked;
  let team = teamInput.checked;
  let holiday = holidayInput.checked;

  if (!job && !salary && !team && !holiday) {
    okOut.classList.remove("d-block");
    okOut.classList.add("d-none");
    FailOut.classList.remove("d-block");
    FailOut.classList.add("d-none");
    return
  }

  if ((job && team && salary && !holiday) || (job && salary && team &&!holiday)) {
    okOut.classList.remove("d-none");
    okOut.classList.add("d-block");
    FailOut.classList.remove("d-block");
    FailOut.classList.add("d-none");
  } else {
    FailOut.classList.remove("d-none");
    FailOut.classList.add("d-block");
    okOut.classList.remove("d-block");
    okOut.classList.add("d-none");
  }
})