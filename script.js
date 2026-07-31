/* ===================================
   FRIENDSHIP DAY 2026
   SCRIPT - PART 1
=================================== */

// ----------------------------
// Screen Navigation
// ----------------------------

function nextScreen(number){

    document.querySelectorAll(".screen").forEach(screen=>{

        screen.classList.remove("active");

    });

    document.getElementById("screen"+number).classList.add("active");

    if(number===4){

        startTypewriter();

    }

}

// ----------------------------
// NO BUTTON
// ----------------------------

function showNo(){

    document.getElementById("questionBox").style.display="none";

    document.getElementById("noBox").style.display="block";

}

function hideNo(){

    document.getElementById("questionBox").style.display="block";

    document.getElementById("noBox").style.display="none";

}

// ----------------------------
// TYPEWRITER
// ----------------------------

const message=

`Thank you for being such a kind friend.

Even though we're miles apart,
it never feels like we're far away.

Every chat,
every meme,
every laugh,
and every little moment
makes this friendship so special.

I truly hope that no matter where life takes us,
our friendship always stays just the way it is today. ❤️`;

let typingIndex=0;

function startTypewriter(){

const box=document.getElementById("typewriter");

if(box.dataset.done) return;

box.dataset.done=true;

function type(){

if(typingIndex<message.length){

box.innerHTML+=message.charAt(typingIndex);

typingIndex++;

setTimeout(type,35);

}

}

type();

}

// ----------------------------
// OPEN GIFT
// ----------------------------

function openGift(){

const gift=document.getElementById("gift");

gift.style.transform="scale(1.2) rotate(18deg)";

setTimeout(()=>{

gift.style.display="none";

document.getElementById("giftMessage").style.display="block";

launchConfetti();

},800);

}

// ----------------------------
// CONFETTI
// ----------------------------

function launchConfetti(){

if(typeof confetti!=="function") return;

confetti({

particleCount:250,

spread:160,

origin:{y:0.6}

});

}

// ----------------------------
// FLOATING HEARTS
// ----------------------------

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

const list=["❤️","💖","💕","💗","💞"];

heart.innerHTML=list[Math.floor(Math.random()*list.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);

// ----------------------------
// SPARKLES
// ----------------------------

function sparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*window.innerWidth+"px";

s.style.top=Math.random()*window.innerHeight+"px";

document.getElementById("sparkles").appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

}

setInterval(sparkle,250);/* ===================================
   SCRIPT - PART 2 (FINAL)
=================================== */

// ----------------------------
// Balloon Animation
// ----------------------------

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

const emojis=["🎈","🎀","💖"];

balloon.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=(8+Math.random()*4)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},12000);

}

setInterval(createBalloon,3500);

// ----------------------------
// Firework
// ----------------------------

function createFirework(x,y){

for(let i=0;i<20;i++){

const fire=document.createElement("div");

fire.className="firework";

fire.style.left=x+"px";

fire.style.top=y+"px";

document.body.appendChild(fire);

const angle=Math.random()*Math.PI*2;

const distance=60+Math.random()*80;

fire.animate([

{
transform:"translate(0,0) scale(1)",
opacity:1
},

{
transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px) scale(0)`,
opacity:0
}

],{

duration:1200,
easing:"ease-out"

});

setTimeout(()=>{

fire.remove();

},1200);

}

}

// ----------------------------
// Heart Explosion
// ----------------------------

function heartExplosion(){

for(let i=0;i<70;i++){

const heart=document.createElement("div");

heart.innerHTML=["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

heart.style.position="fixed";

heart.style.left="50%";

heart.style.top="50%";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

document.body.appendChild(heart);

const angle=Math.random()*Math.PI*2;

const distance=120+Math.random()*200;

heart.animate([

{
transform:"translate(-50%,-50%)",
opacity:1
},

{
transform:`translate(calc(-50% + ${Math.cos(angle)*distance}px),calc(-50% + ${Math.sin(angle)*distance}px))`,
opacity:0
}

],{

duration:1800,
easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1800);

}

}

// ----------------------------
// Virtual Hug
// ----------------------------

function hug(){

heartExplosion();

launchConfetti();

for(let i=0;i<5;i++){

setTimeout(()=>{

createFirework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight/2

);

},i*400);

}

for(let i=0;i<20;i++){

setTimeout(createBalloon,i*150);

}

document.getElementById("endMessage").style.display="block";

document.getElementById("endMessage").animate([

{
transform:"scale(.8)",
opacity:0
},

{
transform:"scale(1.15)",
opacity:1
},

{
transform:"scale(1)"
}

],{

duration:1200,
fill:"forwards"

});

}

// ----------------------------
// Auto Fireworks on Final Screen
// ----------------------------

setInterval(()=>{

const final=document.getElementById("screen7");

if(final.classList.contains("active")){

createFirework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight*0.45

);

}

},2500);

// ----------------------------
// Gift Floating Effect
// ----------------------------

setInterval(()=>{

const gift=document.getElementById("gift");

if(gift && gift.style.display!="none"){

gift.animate([

{
transform:"translateY(0)"
},

{
transform:"translateY(-8px)"
},

{
transform:"translateY(0)"
}

],{

duration:1800

});

}

},2000);

// ----------------------------
// Console Message
// ----------------------------

window.onload=()=>{

console.log("💖 Happy Friendship Day 2026 Website Loaded Successfully!");

};
