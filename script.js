// ==========================
// Screen Navigation
// ==========================

function nextScreen(id){

    document.querySelectorAll(".screen").forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById("screen"+id).classList.add("active");

}

// ==========================
// NO Button
// ==========================

function showNo(){

    document.getElementById("noBox").style.display="block";

}

function hideNo(){

    document.getElementById("noBox").style.display="none";

}

// ==========================
// Gift Opening
// ==========================

function openGift(){

    document.getElementById("gift").style.transform="scale(1.2) rotate(15deg)";

    setTimeout(()=>{

        document.getElementById("gift").style.display="none";

        document.getElementById("gallery").style.display="block";

        if(typeof confetti==="function"){

            confetti({

                particleCount:250,

                spread:150,

                origin:{y:0.6}

            });

        }

    },900);

}

// ==========================
// Slideshow
// ==========================

let slideIndex=0;

const slides=document.querySelectorAll(".slide");

setInterval(()=>{

    if(slides.length===0) return;

    slides[slideIndex].classList.remove("active");

    slideIndex++;

    if(slideIndex>=slides.length){

        slideIndex=0;

    }

    slides[slideIndex].classList.add("active");

},3500);

// ==========================
// Floating Hearts
// ==========================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["❤️","💕","💖","💗","💞"][Math.floor(Math.random()*5)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

// ==========================
// Final Hug
// ==========================

function hug(){

    if(typeof confetti==="function"){

        confetti({

            particleCount:500,

            spread:360,

            startVelocity:40

        });

    }

    alert("🤗 Virtual Hug Sent!\n\nHappy Friendship Day 2026 ❤️");

}// ==========================================
// BALLOONS
// ==========================================

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const balloons = ["🎈", "🎈", "🎀"];

    balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.animationDuration = (8 + Math.random() * 5) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 13000);

}

setInterval(createBalloon, 4000);

// ==========================================
// SPARKLES
// ==========================================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}

setInterval(createSparkle, 250);

// ==========================================
// FIREWORKS
// ==========================================

function createFirework(x, y) {

    for (let i = 0; i < 20; i++) {

        const fire = document.createElement("div");

        fire.className = "firework";

        fire.style.left = x + "px";

        fire.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;

        const distance = 80 + Math.random() * 80;

        fire.animate([
            {
                transform: "translate(0,0)",
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                opacity: 0
            }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        document.body.appendChild(fire);

        setTimeout(() => {
            fire.remove();
        }, 1200);

    }

}

// ==========================================
// AUTO FIREWORKS ON FINAL SCREEN
// ==========================================

setInterval(() => {

    const finalScreen = document.getElementById("screen7");

    if (finalScreen.classList.contains("active")) {

        createFirework(
            Math.random() * window.innerWidth,
            Math.random() * (window.innerHeight / 2)
        );

        if (typeof confetti === "function") {

            confetti({
                particleCount: 80,
                spread: 90,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.5
                }
            });

        }

    }

}, 1800);

// ==========================================
// CAT POP ANIMATION
// ==========================================

document.querySelectorAll(".cat").forEach(cat => {

    cat.addEventListener("click", () => {

        cat.animate([
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.15)"
            },
            {
                transform: "scale(1)"
            }
        ], {
            duration: 500
        });

    });

});

// ==========================================
// GIFT GLOW
// ==========================================

setInterval(() => {

    const gift = document.getElementById("gift");

    if (gift && gift.style.display !== "none") {

        gift.animate([
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.08)"
            },
            {
                transform: "scale(1)"
            }
        ], {
            duration: 1200
        });

    }

}, 1800);// ==========================================
// PART 3 - FINAL ANIMATIONS
// ==========================================

// Heart Explosion
function heartExplosion() {

    for (let i = 0; i < 60; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = (20 + Math.random()*20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 250;

        heart.animate([
            {
                transform: "translate(-50%,-50%) scale(0.5)",
                opacity: 1
            },
            {
                transform: `translate(calc(-50% + ${Math.cos(angle)*distance}px), calc(-50% + ${Math.sin(angle)*distance}px)) scale(1.5)`,
                opacity: 0
            }
        ],{
            duration:2000,
            easing:"ease-out"
        });

        setTimeout(()=>{
            heart.remove();
        },2000);
    }

}

// ==========================================
// Balloon Rain
// ==========================================

function balloonRain(){

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            createBalloon();

        },i*200);

    }

}

// ==========================================
// Final Hug
// ==========================================

function hug(){

    heartExplosion();

    balloonRain();

    if(typeof confetti==="function"){

        confetti({
            particleCount:600,
            spread:360,
            startVelocity:45,
            origin:{y:0.6}
        });

    }

    for(let i=0;i<6;i++){

        setTimeout(()=>{

            createFirework(

                Math.random()*window.innerWidth,

                Math.random()*window.innerHeight*0.45

            );

        },i*500);

    }

    document.getElementById("end").style.transform="scale(1.2)";
    document.getElementById("end").style.color="#ff2d75";

    setTimeout(()=>{

        alert("🌸 Best Friends Forever ❤️\n\nHappy Friendship Day 2026 🥹💖");

    },1800);

}

// ==========================================
// Auto Sparkles Around Cards
// ==========================================

setInterval(()=>{

    document.querySelectorAll(".glass").forEach(card=>{

        const s=document.createElement("div");

        s.className="sparkle";

        s.style.left=Math.random()*card.offsetWidth+"px";

        s.style.top=Math.random()*card.offsetHeight+"px";

        card.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },1800);

    });

},800);

// ==========================================
// Smooth Fade Between Screens
// ==========================================

document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("fade");

});

// ==========================================
// Finished Loading
// ==========================================

window.onload=()=>{

    console.log("Friendship Day 2026 Loaded ❤️");

};
