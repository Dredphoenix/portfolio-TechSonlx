// TYPE IN AND FADE EFFECT
const texts = ["Phoenix [AKA]", "VISHWA . R"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
    if (charIndex < texts[index].length) {
        typedText.textContent += texts[index][charIndex];
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000); 
    }
}
function erase() {
    if (charIndex > 0) {
        typedText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
    }
}
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 500));



// CLOCK AND DATE
function clockSet(){
    let now=new Date();
    let date=now.toLocaleDateString();
    let time=now.toLocaleString();

    document.getElementById("clock").textContent=date;
    document.getElementById("clock").textContent=time;
}
setInterval(clockSet,10);
setInterval();

