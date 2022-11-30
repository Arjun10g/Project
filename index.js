
//  Select all elements inside a div
const names = document.querySelectorAll('div .name');
const title = names[4].querySelector('p');
const icon = document.querySelector('.toggle i');
const back =  document.querySelector('.back')
const content = document.querySelector('.content');
const background = document.querySelector('.background');
const cover = document.querySelector('.cover');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const b7 = document.querySelector('.b7');
const b8 = document.querySelector('.b8');
const b9 = document.querySelector('.b9');
const b10 = document.querySelector('.b10');
const b11 = document.querySelector('.b11');
const b12 = document.querySelector('.b12');
const b13 = document.querySelector('.b13');
const b14 = document.querySelector('.b14');
const b15 = document.querySelector('.b15');
const b16 = document.querySelector('.b16');
const b17 = document.querySelector('.b17');
const b18 = document.querySelector('.b18');
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const s3 = document.querySelector('.s3');
const s4 = document.querySelector('.s4');
const s5 = document.querySelector('.s5');
const s6 = document.querySelector('.s6');
const s7 = document.querySelector('.s7');
const s8 = document.querySelector('.s8');
const s9 = document.querySelector('.s9');
const s10 = document.querySelector('.s10');
const s11 = document.querySelector('.s11');
const s12 = document.querySelector('.s12');
const s13 = document.querySelector('.s13');
const s14 = document.querySelector('.s14');
const s15 = document.querySelector('.s15');
const s16 = document.querySelector('.s16');
const s17 = document.querySelector('.s17');
const s18 = document.querySelector('.s18');
const cross = document.querySelectorAll('.cross');

// console.log(names[0].querySelectorAll('div'));    


// create gsap timeline
const tl = gsap.timeline({ defaults: {  ease: "bounce.out" } });

names[0].querySelectorAll('div').forEach(x => {
    tl.fromTo(x, { y: -100 }, { y: 0, duration: 0.6 });
    }
);

let arjunel = names[0].childElementCount*0.6;
let tenzinel = arjunel + names[1].childElementCount*0.6;
let linael =  tenzinel + names[2].childElementCount*0.6;
let jongel = linael + names[3].childElementCount*0.6;

let headheight = document.querySelector('.header').clientHeight;

gsap.fromTo(names[0], { opacity:1 }, { opacity:0, duration: 1, delay: arjunel });
gsap.fromTo(names[1], { opacity:1 }, { opacity:0, duration: 1, delay: tenzinel+1 });
gsap.fromTo(names[2], { opacity:1 }, { opacity:0, duration: 1, delay: linael+2 });
gsap.fromTo(names[3], { opacity:1 }, { opacity:0, duration: 1, delay: jongel+3 });


setTimeout(() => {
    names[0].style.display = 'none';
    names[1].style.display = 'flex';
    names[1].querySelectorAll('div').forEach(x => {
        tl.fromTo(x, { y: -100 }, { y: 0, duration: 0.6 });
        }
    );
} , (arjunel+1)*1000);


setTimeout(() => {
    names[1].style.display = 'none';
    names[2].style.display = 'flex';
    names[2].querySelectorAll('div').forEach(x => {
        tl.fromTo(x, { y: -100 }, { y: 0, duration: 0.6 });
        }
    );
} , (tenzinel+2)*1000); 


setTimeout(() => {
    names[2].style.display = 'none';
    names[3].style.display = 'flex';
    back.style.display = 'block';
    names[3].querySelectorAll('div').forEach(x => {
        tl.fromTo(x, { y: -100 }, { y: 0, duration: 0.6 });
        }
    );
    tl.fromTo(back, { y: -(headheight + 50)}, { y: 0, duration: 2,delay:1});
} , (linael+3)*1000);


setTimeout(() => {
    names[3].style.display = 'none';
    names[4].style.display = 'block';
    document.querySelector('.header > p').style.display = 'none';
    tl.to(title, { color:"floralwhite", duration: 0.1,  ease: "power4.out" });
    tl.to(icon, { color:"floralwhite", duration: 0.1,  ease: "power4.out" }, "<");
    tl.fromTo(title, { opacity: 0 }, { opacity:1 ,duration: 1.5, ease: "power4.out" },"<");
    tl.fromTo(icon, { opacity: 0 }, { opacity:1 ,duration: 1.5, ease: "power4.out" },"<");
    
} , (jongel+4)*1000);


// Delete
// let headheight = document.querySelector('.header').clientHeight;
// console.log(headheight);
// Delete

content.style.height = `calc(100vh - ${headheight}px)`;

//  PART 2 FOCUS ON CONTENT

 const data = document.querySelector('.data');
 const efa = document.querySelector('.efa');
 const cfa = document.querySelector('.cfa'); 

data.addEventListener('mouseover', () => {
    data.style.backgroundImage = "url('https://img.freepik.com/free-vector/abstract-low-poly-connection-lines-digital-technology-background_1017-25550.jpg?w=2000')";
    data.style.backgroundSize = 'cover';
    data.style.backgroundRepeat = 'no-repeat';
    gsap.to(background, { xPercent: -10,yPercent: -10 , duration:10, ease: "power4.out" });
});

data.addEventListener('mouseout', () => {
    data.style.backgroundImage = "none";
    content.style.backgroundImage = "none";
    gsap.to(background, { xPercent: 0,yPercent: 0, duration:10, ease: "power4.out" });
});

efa.addEventListener('mouseover', () => {
    efa.style.backgroundImage = "url('https://img.freepik.com/free-vector/abstract-low-poly-connection-lines-digital-technology-background_1017-25550.jpg?w=2000')";
    efa.style.backgroundSize = 'cover';
    efa.style.backgroundRepeat = 'no-repeat';
    gsap.to(background, { xPercent: -20,yPercent: -20, duration:10, ease: "power4.out" });
    
} );

efa.addEventListener('mouseout', () => {
    efa.style.backgroundImage = "none";
    content.style.backgroundImage = "none";
    gsap.to(background, { xPercent: 0 ,yPercent: 0, duration:20, ease: "power4.out" });
}
);

cfa.addEventListener('mouseover', () => {
    cfa.style.backgroundImage = "url('https://img.freepik.com/free-vector/abstract-low-poly-connection-lines-digital-technology-background_1017-25550.jpg?w=2000')";
    cfa.style.backgroundSize = 'cover';
    cfa.style.backgroundRepeat = 'no-repeat';
    gsap.to(background, { xPercent: -32,yPercent: -32, duration:10, ease: "power4.out" });

} );

cfa.addEventListener('mouseout', () => {
    cfa.style.backgroundImage = "none";
    content.style.backgroundImage = "none";
    gsap.to(background, { xPercent: 0,yPercent: 0, duration:30, ease: "power4.out" });
}
);

gsap.fromTo(content, { opacity: 0}, { opacity:1, duration: 5.5, ease: "power4.out" });

// SLIDES START HERE
// EXTRA
// EXTRA
// EXTRA



//  Carousel

const btn = document.querySelector('.i2');
const btn2 = document.querySelector('.i1');
const spinner1 = document.querySelector('.spin1');
const carousel = document.querySelector('.carousel');
const header = document.querySelector('.header');
const boxes = document.querySelectorAll('.box');
const boxdiv = document.querySelectorAll('.box div');
const datainfo = document.querySelector('.datainfo');

datainfo.style.height = `calc(100vh - ${headheight}px)`;


// console.log(boxes[0]);

let active = 0;
let angle = 0;

boxes[0].classList.add('active');

btn.addEventListener('click', () => {
    boxes[0].classList.remove('active');
    boxes[active].classList.remove('active');
    gsap.to(boxdiv[active], {duration: 1.5,scale:1,color:'white'});
    angle = angle + 120;
    spinner1.style.transform = `rotateY(${angle}deg)`;
    active ++;
    if (active > 2) {
        active = 0;
    }
    boxes[active].classList.add('active');
    gsap.to(boxdiv[active], {duration: 1.5, opacity: 1, scale: 1.3,color:'black', delay:1,ease: "power2.out"});
    if (window.getComputedStyle(datainfo).backgroundPosition !== "80% 80%") {
        gsap.to(datainfo, {backgroundPosition: "80% 80%", duration:40 ,ease: "power2.out"});
    }else if(window.getComputedStyle(datainfo).backgroundPosition === "80% 80%"){
        gsap.to(datainfo, {backgroundPosition: "0% 0%", duration:40 ,ease: "power2.out"});
    }    
});

btn2.addEventListener('click', () => {
    boxes[active].classList.remove('active');
    gsap.to(boxdiv[active], {duration: 1.5,scale:1,color:'white'});
    angle = angle - 120;
    spinner1.style.transform = `rotateY(${angle}deg)`;
    active --;
    if (active < 0) {
        active = 2;}
    boxes[active].classList.add('active');
    gsap.to(boxdiv[active], {duration: 1.5, opacity: 1, scale: 1.3,color:'black', delay:1,ease: "power2.out"});
    if (window.getComputedStyle(datainfo).backgroundPosition !== "80% 80%") {
        gsap.to(datainfo, {backgroundPosition: "80% 80%", duration:40 ,ease: "power2.out"});
    } else if(window.getComputedStyle(datainfo).backgroundPosition === "80% 80%"){
        gsap.to(datainfo, {backgroundPosition: "0% 0%", duration:40 ,ease: "power2.out"});
    } 
    });


let headerht = header.offsetHeight;
carousel.style.height = `calc(100vh - ${headerht}px)`;

// 
// 
//  Carousel 22222222222
// 
// 
// 

const btn3 = document.querySelector('.i3');
const btn4 = document.querySelector('.i4');
const spinner2 = document.querySelector('.spin2');
const carousel2 = document.querySelector('.carousel2');
const box2 = document.querySelectorAll('.box2');
const boxdiv2 = document.querySelectorAll('.box2 div');
const efainfo = document.querySelector('.efainfo');

efainfo.style.height = `calc(100vh - ${headheight}px)`;


// console.log(boxes[0]);

let active2 = 0;
let angle2 = 0;

boxdiv2[active2].style.scale = 1.15;
box2[active2].style.color = 'black';
box2[active2].style.border = '10px solid white';

btn3.addEventListener('click', () => {
    boxdiv2[active2].style.scale = 1;
    box2[active2].style.color = 'white';
    box2[active2].style.border = 'none';
    gsap.to(boxdiv2[active2], {duration: 1.5,scale:1,color:'white'});
    angle2 = angle2 + 90;
    spinner2.style.transform = `rotateY(${angle2}deg)`;
    active2 ++;
    if (active2 > 3) {
        active2 = 0;
    }
    boxdiv2[active2].style.scale = 1.15;
    box2[active2].style.color = 'black';
    box2[active2].style.border = '10px solid white';
    gsap.to(boxdiv2[active2], {duration: 1.5, opacity: 1, scale: 1.15,color:'black', delay:1,ease: "power2.out"});
    if (window.getComputedStyle(efainfo).backgroundPosition !== "80% 80%") {
        gsap.to(efainfo, {backgroundPosition: "80% 80%", duration:40 ,ease: "power2.out"});
    } else if(window.getComputedStyle(efainfo).backgroundPosition === "80% 80%"){
        gsap.to(datainfo, {backgroundPosition: "0% 0%", duration:40 ,ease: "power2.out"});
    } 
    });



btn4.addEventListener('click', () => {
    box2[active2].style.scale = 1;
    box2[active2].style.color = 'white';
    box2[active2].style.border = 'none';
    gsap.to(boxdiv2[active2], {duration: 1.5,scale:1,color:'white'});
    angle2 = angle2 - 90;
    spinner2.style.transform = `rotateY(${angle2}deg)`;
    active2 --;
    if (active2 < 0) {
        active2 = 3;}
    box2[active2].style.scale = 1.15;
    box2[active2].style.color = 'black';
    box2[active2].style.border = '10px solid white';
    gsap.to(boxdiv2[active2], {duration: 1.5, opacity: 1, scale: 1.15,color:'black', delay:1,ease: "power2.out"});
    if (window.getComputedStyle(efainfo).backgroundPosition !== "80% 80%") {
        gsap.to(efainfo, {backgroundPosition: "80% 80%", duration:40 ,ease: "power2.out"});
    } else if(window.getComputedStyle(efainfo).backgroundPosition === "80% 80%"){
        gsap.to(datainfo, {backgroundPosition: "0% 0%", duration:40 ,ease: "power2.out"});
    } 
    });


carousel2.style.height = `calc(100vh - ${headerht}px)`;

// 
// 
// 
// 
// 
// FINAL CAROUSEL
// 
// 
// 

const btn5 = document.querySelector('.i5');
const btn6 = document.querySelector('.i6');
const spinner3 = document.querySelector('.spin3');
const carousel3 = document.querySelector('.carousel3');
const box3 = document.querySelectorAll('.box3');
const boxdiv3 = document.querySelectorAll('.box3 div');
const cfainfo = document.querySelector('.cfainfo');

cfainfo.style.height = `calc(100vh - ${headheight}px)`;

// console.log(boxes[0]);

let active3 = 0;
let angle3 = 0;

boxdiv3[active3].style.scale = 1.15;
box3[active3].style.color = 'black';
box3[active3].style.border = '10px solid white';

btn5.addEventListener('click', () => {
    boxdiv3[active3].style.scale = 1;
    box3[active3].style.color = 'white';
    box3[active3].style.border = 'none';
    gsap.to(boxdiv3[active3], {duration: 1.5,scale:1,color:'white'});
    angle3 = angle3 + 90;
    spinner3.style.transform = `rotateY(${angle3}deg)`;
    active3 ++;
    if (active3 > 3) {
        active3 = 0;
    }
    boxdiv3[active3].style.scale = 1.15;
    box3[active3].style.color = 'black';
    box3[active3].style.border = '10px solid white';
    gsap.to(boxdiv3[active3], {duration: 1.5, opacity: 1, scale: 1.15,color:'black', delay:1,ease: "power2.out"});
    if (window.getComputedStyle(cfainfo).backgroundPosition !== "80% 80%") {
        gsap.to(cfainfo, {backgroundPosition: "80% 80%", duration:40 ,ease: "power2.out"});
    } else if(window.getComputedStyle(cfainfo).backgroundPosition === "80% 80%"){
        gsap.to(datainfo, {backgroundPosition: "0% 0%", duration:40 ,ease: "power2.out"});
    }
    });




btn6.addEventListener('click', () => {
    box3[active3].style.scale = 1;
    box3[active3].style.color = 'white';
    box3[active3].style.border = 'none';
    gsap.to(boxdiv3[active3], {duration: 1.5,scale:1,color:'white'});
    angle3 = angle3 - 90;
    spinner3.style.transform = `rotateY(${angle3}deg)`;
    active3 --;
    if (active3 < 0) {
        active3 = 3;}
    box3[active3].style.scale = 1.15;
    box3[active3].style.color = 'black';
    box3[active3].style.border = '10px solid white';
    gsap.to(boxdiv3[active3], {duration: 1.5, opacity: 1, scale: 1.15,color:'black', delay:1,ease: "power2.out"});
    if (window.getComputedStyle(cfainfo).backgroundPosition !== "80% 80%") {
        gsap.to(cfainfo, {backgroundPosition: "80% 80%", duration:40 ,ease: "power2.out"});
    } else if(window.getComputedStyle(cfainfo).backgroundPosition === "80% 80%"){
        gsap.to(datainfo, {backgroundPosition: "0% 0%", duration:40 ,ease: "power2.out"});
    }
    });


carousel3.style.height = `calc(100vh - ${headerht}px)`;

//
//
//



// boxes.forEach(box => {
//     box.addEventListener('click', () => {
//         spinner.style.transition = 'none';
//         gsap.fromTo(spinner, {rotationY: 0}, {rotationY:1800,duration: 5, scale:0, ease: "power2.out"});
//     });
// });


//  EVENT LISTNENERS
tl3 = gsap.timeline(defaults = {duration: 1.5, ease: "power4.out"});
tl2 = gsap.timeline(defaults = {duration: 1.5, ease: "power4.out"});

let current = undefined;

icon.addEventListener('click', () => {
    gsap.to(current, {opacity:0, duration: 2.5, ease: "power4.out" });
    setTimeout(() => {
        current.style.display = 'none';
        content.style.display = 'flex';
        tl3.fromTo(content, {opacity: 0}, {opacity: 1, duration: 0.1, ease: "power4.out" });
        tl3.fromTo(content, {yPercent:100}, {yPercent:0 ,duration: 2.5, ease: "power4.out" });
        tl3.fromTo(data, {opacity:0}, {opacity:0.4,duration:3 ,ease: "power4.out" }, ">");
        tl3.fromTo(efa, {opacity:0}, {opacity:0.4,duration:3 ,ease: "power4.out" }, "<");
        tl3.fromTo(cfa, {opacity:0}, {opacity:0.4,duration:3 ,ease: "power4.out" }, "<");
    }, 1000);
});


data.addEventListener('click', () => {
    current = datainfo;
    gsap.to(content, {opacity:0, duration: 1.5, ease: "power4.out" });
    setTimeout(() => {
        content.style.display = 'none';
        current.style.display = 'grid';
        current.style.backgroundImage = "url('backimgdiv.jpeg')";
        current.style.backgroundSize = 'cover';
        current.style.backgroundPosition = '0% 0%';
        current.style.backgroundRepeat = 'no-repeat';
        tl2.fromTo(current, {opacity: 0}, {opacity: 1, duration: 0.1, ease: "power4.out" });
        tl2.fromTo(current, {yPercent:100}, {yPercent:0 ,duration: 2.5, ease: "power4.out" });
        tl2.fromTo(carousel, {opacity:0}, {opacity:1,duration:3 ,ease: "power4.out" }, ">");

    }, 1000);
});



efa.addEventListener('click', () => {
    current = efainfo;
    gsap.to(content, {opacity:0, duration: 1.5, ease: "power4.out" });
    setTimeout(() => {
        content.style.display = 'none';
        current.style.display = 'grid';
        current.style.backgroundImage = "url('backimgdiv.jpeg')";
        current.style.backgroundSize = 'cover';
        current.style.backgroundPosition = '0% 0%';
        current.style.backgroundRepeat = 'no-repeat';
        tl2.fromTo(current, {opacity: 0}, {opacity: 1, duration: 0.1, ease: "power4.out" });
        tl2.fromTo(current, {yPercent:100}, {yPercent:0 ,duration: 2.5, ease: "power4.out" });
        tl2.fromTo(carousel2, {opacity:0}, {opacity:1,duration:3 ,ease: "power4.out" }, ">");
    }, 1000);
});

cfa.addEventListener('click', () => {
    current = cfainfo;
    gsap.to(content, {opacity:0, duration: 1.5, ease: "power4.out" });
    setTimeout(() => {
        content.style.display = 'none';
        current.style.display = 'grid';
        current.style.backgroundImage = "url('backimgdiv.jpeg')";
        current.style.backgroundSize = 'cover';
        current.style.backgroundPosition = '0% 0%';
        current.style.backgroundRepeat = 'no-repeat';
        tl2.fromTo(current, {opacity: 0}, {opacity: 1, duration: 0.1, ease: "power4.out" });
        tl2.fromTo(current, {yPercent:100}, {yPercent:0 ,duration: 2.5, ease: "power4.out" });
        tl2.fromTo(carousel3, {opacity:0}, {opacity:1,duration:3 ,ease: "power4.out" }, ">");

    }, 1000);
});

// slides

// cover.style.height = `calc(100vh - ${headheight}px)`;
// cover.style.top = `${headheight}px`;
let cslide = undefined;


b1.addEventListener('click', () => {
    cslide = s1;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b2.addEventListener('click', () => {
    cslide = s2;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b3.addEventListener('click', () => {
    cslide = s3;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b4.addEventListener('click', () => {
    cslide = s4;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b5.addEventListener('click', () => {
    cslide = s5;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b6.addEventListener('click', () => {
    cslide = s6;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b7.addEventListener('click', () => {
    cslide = s7;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b8.addEventListener('click', () => {
    cslide = s8;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b9.addEventListener('click', () => {
    cslide = s9;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b10.addEventListener('click', () => {
    cslide = s10;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

b11.addEventListener('click', () => {
    cslide = s11;
    cslide.style.height = `calc(100vh - ${headheight}px)`;
    cslide.style.top = `${headheight}px`;
    cslide.style.display = 'block';
    gsap.fromTo(cslide, {yPercent:100} , {yPercent:0, duration: 1.5, ease: "power4.out" });
});

cross.forEach(cross => {
    cross.addEventListener('click', () => {
        gsap.fromTo(cslide, {yPercent:0} , {yPercent:100, duration: 1.5, ease: "power4.out" });
        setTimeout(() => {
            cslide.style.display = 'none';
        }, 1500);
    });
});