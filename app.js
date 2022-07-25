const topMenu = document.querySelector('.top-menu');

function move(ele){
    document.querySelector(`#div${ele}`).scrollIntoView({behavior: "smooth"});
    // if(ele > 1) topMenu.classList.add("top-menu__bg") 
    //     else topMenu.classList.remove("top-menu__bg") 
}

topMenu.onclick = function(e){
    for(let i=1; i<5; i++) 
        if(e.target.id === `btn${i}`) {
             move(i);
        }
};

