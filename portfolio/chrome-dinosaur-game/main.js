const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let timer = 0;
const cactuses = [];
let jump = false;
let jumpTimer = 0;

const dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
const cactus = new Cactus();
cactus.draw();

function framework() {
    requestAnimationFrame(framework)
    timer++;
    ctx.clearRect(0,0,canvas.width, canvas.height);

    if (timer % 240 ===0){
        const cactus =  new Cactus();
        cactuses.push(cactus);
    }
    cactuses.forEach((a, i, o) => {
        if(a.x <0) {
            o.splice(i,1)
        }
        a.x--;
        a.draw();
    })
    console.log("jump", jump, "jumpTimer", jumpTimer, "y", dino.y);
    if(jump === true){
        dino.y--;
        jumpTimer++;
        if(jumpTimer > 100){
            jump = false;
            jumpTimer = 0; 
        }
    
    } else if(jump === false) {
        if(dino.y >200){
             dino.y++;
         } else if(dino.y >300){
        dino.y--;
         }
    }

    dino.draw();
}
framework();

document.addEventListener('keydown', function(event){
    if (event.code === 'Space') {
        jump = true;
    }
})