const target = document.querySelector("#dynamic");

function blink() {
    target.classList.toggle("active");
}
function randomString() {
    const stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}
function resetTyping(){
    target.textContent = "";
    dynamic(randomString())
}
function dynamic(randomArr) {
   
    if(randomArr.length>0) {
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr)
        },80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString())
setInterval(blink, 500);

