const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const btn = document.getElementById("btn");
const getMonth = document.querySelector(".get-month");
const getYear = document.querySelector(".get-year");
const getDays = document.querySelector(".get-days");
const errorMessageDayInput = document.querySelector(".error-message-dayInput");
const errorMessageMonthInput = document.querySelector(
  ".error-message-monthInput"
);
const errorMessageYearInput = document.querySelector(
  ".error-message-yearInput"
);
const dayLabel = document.querySelector(".day-label");
const monthLabel = document.querySelector(".month-label");
const yearLabel = document.querySelector(".year-label");

btn.addEventListener("click", calculateAge);

function calculateAge(event) {
  event.preventDefault();

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  if (isNaN(day) || day < 1 || day > 31) {
    errorMessageDayInput.classList.remove("hidden");
    errorMessageDayInput.classList.add("error-color");
    dayLabel.style.color = "#f39192";
    dayInput.style.borderColor = "#ffcacb";
    return;
  } else {
    errorMessageDayInput.classList.add("hidden");
    errorMessageDayInput.classList.remove("error-color");
    dayLabel.style.color = "#7d7d7d";
    dayInput.style.borderColor = "#f4f4f4";
  }

  if (isNaN(month) || month < 1 || month > 12) {
    errorMessageMonthInput.classList.remove("hidden");
    errorMessageMonthInput.classList.add("error-color");
    monthLabel.style.color = "#f39192";
    monthInput.style.borderColor = "#ffcacb";
    return;
  } else {
    errorMessageMonthInput.classList.add("hidden");
    errorMessageMonthInput.classList.remove("error-color");
    monthLabel.style.color = "#7d7d7d";
    monthInput.style.borderColor = "#f4f4f4";
  }

  if (isNaN(year)) {
    errorMessageYearInput.classList.remove("hidden");
    errorMessageYearInput.classList.add("error-color");
    yearLabel.style.color = "#f39192";
    yearInput.style.borderColor = "#ffcacb";
    return;
  } else {
    errorMessageYearInput.classList.add("hidden");
    errorMessageYearInput.classList.remove("error-color");
    yearLabel.style.color = "#7d7d7d";
    yearInput.style.borderColor = "#f4f4f4";
  }

  const birthDate = new Date(
    yearInput.value,
    monthInput.value - 1,
    dayInput.value
  );
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - birthDate;
  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  getYear.textContent = years;
  getMonth.textContent = months;
  getDays.textContent = days;
}
