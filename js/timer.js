const hourElement = document.querySelector(".timer__greenline");
const timerHours = document.querySelector(".timer__hours");
const minuteElement = document.querySelector(".timer__blueline");
const timerMinutes = document.querySelector(".timer__minutes");
const secondElement = document.querySelector(".timer__orangeline");
const timerSeconds = document.querySelector(".timer__seconds");

//Дата розыгрыша

const lotteryHour = 40;
const lotteryMinute = 16;
const lotterySecond = 0;

function refreshTimer() {
  var date = new Date();

  if (lotteryHour > date.getHours()) {
    hourElement.style.strokeDashoffset = `calc(-487 + (487 * (
      100 - (${date.getHours()} * 100) / ${lotteryHour - 1}
    )) / 100)`;
    timerHours.innerHTML = `${lotteryHour - 1 - date.getHours()}`;

    minuteElement.style.strokeDashoffset = `calc(-487 + (487 * (
      100 - ( ${date.getMinutes()} * 100) / 60
    )) / 100)`;
    timerMinutes.innerHTML = `${59 - date.getMinutes()}`;

    secondElement.style.strokeDashoffset = `calc(-487 + (487 * (
      100 - (${date.getSeconds()} * 100) / 60
    )) / 100)`;
    timerSeconds.innerHTML = `${60 - date.getSeconds()}`;
  } else {
    hourElement.style.strokeDashoffset = "487";
    timerHours.innerHTML = `0`;

    if (lotteryMinute > date.getMinutes()) {
      secondElement.style.strokeDashoffset = `calc(-487 + (487 * (
        100 - (${date.getSeconds()} * 100) / 60
      )) / 100)`;
      timerSeconds.innerHTML = `${60 - date.getSeconds()}`;

      minuteElement.style.strokeDashoffset = `calc(-487 + (487 * (
        100 - ( ${date.getMinutes()} * 100) / ${lotteryMinute - 1}
      )) / 100)`;
      timerMinutes.innerHTML = `${lotteryMinute - 1 - date.getMinutes()}`;
    } else {
      minuteElement.style.strokeDashoffset = `487`;
      timerMinutes.innerHTML = `0`;

      for (let i = 59; i > 0; i--) {
        secondElement.style.strokeDashoffset = `calc(-487 + (487 * (
          100 - (${date.getSeconds()} * 100) / 60
        )) / 100)`;
        timerSeconds.innerHTML = `${i - date.getSeconds()}`;
      }
      secondElement.style.strokeDashoffset = `487`;
      timerSeconds.innerHTML = `0`;
      clearInterval(intervalId);
      console.log("thats all");
    }
  }
}

refreshTimer();

var intervalId = setInterval(refreshTimer, 1000);
