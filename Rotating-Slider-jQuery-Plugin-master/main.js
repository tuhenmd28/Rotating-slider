$('.rotating-slider').rotatingSlider({
    autoRotate: true,
    autoRotateInterval: 6000,
    draggable: true,
    directionControls: false,
    directionLeftText: '&lsaquo;',
    directionRightText: '&rsaquo;',
    rotationSpeed: 750,
    slideHeight: 100,
    slideWidth: 200,
    /* Callback Functions */
    beforeRotationStart: function(){
    },
    afterRotationStart: function(){},
    beforeRotationEnd: function(){},
    afterRotationEnd: function(){}
});


function reload(){
    
let inner = document.querySelectorAll(" .inner");
let active = document.querySelectorAll("ul.slides li")
let banner = document.querySelector(".banner")
let value1 = active[0].classList.contains('active-slide');
let value2 = active[1].classList.contains('active-slide');
let value3 = active[2].classList.contains('active-slide');
let value4 = active[3].classList.contains('active-slide');
let value5 = active[4].classList.contains('active-slide');
let value6 = active[5].classList.contains('active-slide');

const img = inner[0].children[0].attributes.src.value;

if(value1){
    console.log(1);
    let src = inner[0].children[0].attributes.src.value;
    
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}else if(value2){
    console.log(2);
    let src = inner[1].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value3){
    console.log(3);
    let src = inner[2].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value4){
    console.log(4);
    let src = inner[3].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value5){
    console.log(5);
    let src = inner[4].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value6){
    console.log(6);
    let src = inner[5].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}else{
    banner.style.backgroundImage = 'url(' + img + ')';
}

}
setInterval('reload()', 6000);