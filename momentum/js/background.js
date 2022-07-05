const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"]

const bgImage = document.createElement("img")
const chosenImage = images[Math.floor(Math.random() * images.length)]

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundColor = "black";
// document.body.style.backgroundImage = `url('img/${chosenImage}')`
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundPosition = "center center";
// document.body.style.backgroundSize = "cover"


