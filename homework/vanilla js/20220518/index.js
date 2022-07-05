const today = document.querySelector("h3");

function getTime() {
    const setDate = new Date("2022-12-24T00:00:00+0900");
    const current = new Date();
    const gap = setDate.getTime() - current.getTime();
    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((gap % (1000 * 60)) / 1000);

    today.innerText = `${String(day).padStart(3, "0")}d ${String(hour).padStart(2, "0")}h ${String(min).padStart(2, "0")}m ${String(sec).padStart(2, "0")}s`;
}

getTime();
setInterval(getTime, 1000);


