const clock = document.querySelector("h3#clock")
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function getClock() {
    const dates = new Date();
    const year = dates.getFullYear();
    const month = String(dates.getMonth() + 1).padStart(2, "0");
    const date = String(dates.getDate()).padStart(2, "0");
    const day = week[dates.getDay() - 1];


    const hours = String(dates.getHours()).padStart(2, "0");
    const minutes = String(dates.getMinutes()).padStart(2, "0");
    const seconds = String(dates.getSeconds()).padStart(2, "0");
    clock.innerText = `${year}. ${month}. ${date}. ${day}  ${hours} : ${minutes} : ${seconds}`;
}
getClock()
setInterval(getClock, 1000)