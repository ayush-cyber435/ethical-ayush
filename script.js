 const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");


function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();


const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
const chars = letters.split("");

const fontSize = 16;

let columns = Math.floor(canvas.width / fontSize);

let drops = [];


function setupMatrix(){

    columns = Math.floor(canvas.width / fontSize);

    drops = [];

    for(let i=0;i<columns;i++){

        drops[i]=1;

    }

}


setupMatrix();



function matrix(){

    ctx.fillStyle="rgba(0,0,0,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);


    ctx.fillStyle="#00ff66";
    ctx.font=fontSize+"px monospace";


    for(let i=0;i<drops.length;i++){

        let text = chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );


        if(
            drops[i]*fontSize > canvas.height &&
            Math.random()>0.975
        ){

            drops[i]=0;

        }


        drops[i]++;

    }


    requestAnimationFrame(matrix);

}


matrix();



window.addEventListener("resize",()=>{

    resizeCanvas();

    setupMatrix();

});





// Typing Effect

const words=[

"Initializing Cyber Lab...",
"Loading Security Modules...",
"Linux | Python | Web Security",
"Future Ethical Hacker",
"Welcome To Ayush Cyber Dashboard"

];


let wordIndex=0;
let charIndex=0;

const typing=document.getElementById("typing");



function type(){

    if(charIndex < words[wordIndex].length){

        typing.innerHTML += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,70);

    }

    else{

        setTimeout(erase,1500);

    }

}



function erase(){

    if(charIndex>0){

        typing.innerHTML =
        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,40);

    }

    else{

        wordIndex++;

        if(wordIndex>=words.length){

            wordIndex=0;

        }


        setTimeout(type,300);

    }

}



type();




// Cyber Boot Console

console.log(
`
==============================
 AYUSH CYBER LAB
 SYSTEM ONLINE
------------------------------
 Loading Modules...
 Network Secure
 Dashboard Activated
==============================
`
);




// Buttons

const buttons=document.querySelectorAll("button");


buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert(
        "Cyber Module Opening Soon ⚡"
        );

    });

});
// Cyber Dashboard System Monitor

function systemScan(){

let cpu=Math.floor(Math.random()*40)+30;
let ram=Math.floor(Math.random()*50)+40;


document.getElementById("cpu").innerHTML=
cpu+"% Usage";


document.getElementById("ram").innerHTML=
ram+"% Active";


document.getElementById("network").innerHTML=
"Connected ✓";


document.getElementById("security").innerHTML=
"Firewall Active ✓";


}


setInterval(systemScan,2000);

systemScan();




// Terminal Animation

const terminalLines=[

"> Initializing modules...",
"> Checking network...",
"> Loading security protocols...",
"> System access granted...",
"> Ayush Cyber Dashboard Online ⚡"

];


let line=0;


function terminalBoot(){

if(line<terminalLines.length){

document.getElementById("terminalText").innerHTML +=
"<br>"+terminalLines[line];

line++;

setTimeout(terminalBoot,700);

}

}


terminalBoot();
// Cyber Terminal Commands

const terminalInput =
document.getElementById("terminalInput");

const terminalOutput =
document.getElementById("terminalOutput");


terminalInput.addEventListener("keydown",function(e){


if(e.key==="Enter"){


let command=terminalInput.value.toLowerCase();


terminalOutput.innerHTML +=
"<br><br>root@ayush:~$ "+command;


if(command==="help"){

terminalOutput.innerHTML +=
"<br>Commands: help, about, tools, status";

}


else if(command==="about"){

terminalOutput.innerHTML +=
"<br>Ayush Cyber Lab - Ethical Hacking Learning Platform";

}


else if(command==="tools"){

terminalOutput.innerHTML +=
"<br>Linux | Python | Network Security | Web Security";

}


else if(command==="status"){

terminalOutput.innerHTML +=
"<br>System Online ✓ Security Active ✓";

}


else{

terminalOutput.innerHTML +=
"<br>Command not found";

}


terminalInput.value="";


}


});
// Cyber Login Demo

function login(){

let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;


let status =
document.getElementById("loginStatus");


if(user==="ayush" && pass==="cyber"){

status.innerHTML =
"ACCESS GRANTED ✓";


status.style.color="#00ff66";

}

else{

status.innerHTML =
"ACCESS DENIED ✖";


status.style.color="red";

}

}
// AI Cyber Assistant Demo


function askAI(){


let input =
document.getElementById("aiInput").value.toLowerCase();


let response =
document.getElementById("aiResponse");


let answer="";


if(input.includes("linux")){

answer="Linux is a powerful operating system used in cybersecurity labs.";

}

else if(input.includes("python")){

answer="Python helps in automation, scripting and security tools.";

}

else if(input.includes("hacking")){

answer="Learn ethical hacking with permission and proper security practices.";

}

else if(input.includes("network")){

answer="Networking basics include IP, TCP/IP, DNS and protocols.";

}

else{

answer="Command received. Cyber module updating...";

}


response.innerHTML +=
"<br><br>YOU: "+input+
"<br>AI: "+answer;


document.getElementById("aiInput").value="";


}
// Visitor Counter Demo


let visits = localStorage.getItem("visits");


if(!visits){

visits = 1;

}

else{

visits++;

}


localStorage.setItem("visits",visits);


document.getElementById("visitor").innerHTML =
visits.toString().padStart(4,"0");
// Loading Screen Fix

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader")
.classList.add("hide");

},2000);

});
// Digital Clock

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();

document.getElementById("date").innerHTML =
now.toDateString();

}

updateClock();

setInterval(updateClock,1000);
// Mouse Glow

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--x",e.clientX+"px");

document.body.style.setProperty("--y",e.clientY+"px");

});
const titles=[

"☠ AYUSH CYBER LAB",

"⚡ ETHICAL HACKING",

"🛡 CYBER SECURITY",

"🐍 PYTHON LAB"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex];

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},2000);
const logs=[

"Loading Firewall...",

"Checking Network...",

"Access Granted...",

"Scanning Ports...",

"Monitoring Traffic...",

"Initializing Linux Kernel..."

];

setInterval(()=>{

console.log(

logs[Math.floor(Math.random()*logs.length)]

);

},3000);
// Cyber Notification

const notify=document.createElement("div");

notify.className="notification";

notify.innerHTML="🛡 Firewall Active";

document.body.appendChild(notify);


setTimeout(()=>{

notify.classList.add("show");

},1000);


setTimeout(()=>{

notify.classList.remove("show");

},5000);
const cyberMessages = [

"🟢 Firewall Updated",

"🌐 Network Secure",

"🔍 Threat Scan Complete",

"🛡 Security Modules Loaded",

"⚡ Linux Kernel Running",

"💾 Backup Completed",

"🔒 Encryption Enabled",

"📡 Monitoring Network Traffic"

];

setInterval(()=>{

notify.innerHTML =
cyberMessages[Math.floor(Math.random()*cyberMessages.length)];

notify.classList.add("show");

setTimeout(()=>{

notify.classList.remove("show");

},4000);

},8000);
document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

const audio=new Audio(
"https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"
);

audio.volume=0.15;

audio.play().catch(()=>{});

});

});
const cyberSound = new Audio("https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3");

cyberSound.loop = true;
cyberSound.volume = 0.2;

document.addEventListener("click", () => {
    cyberSound.play().catch(() => {});
}, { once: true });
const beep = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");

document.addEventListener("keydown", () => {
    beep.currentTime = 0;
    beep.volume = 0.1;
    beep.play().catch(() => {});
});
const boot = new Audio("https://assets.mixkit.co/active_storage/sfx/221/221-preview.mp3");

window.addEventListener("click", () => {
    boot.play().catch(() => {});
}, { once: true });
window.addEventListener("click", () => {

const voice = new SpeechSynthesisUtterance(
"Welcome to Ayush Cyber Dashboard. All systems are online. Access granted."
);

voice.rate = 0.9;
voice.pitch = 0.9;
voice.volume = 1;

speechSynthesis.speak(voice);

}, { once: true });
document.addEventListener("click", function () {

    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(
        "Welcome to Ayush Cyber Dashboard. All systems are online. Access granted."
    );

    msg.lang = "en-US";
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.volume = 1;

    speechSynthesis.speak(msg);

}, { once: true });
// Buttons

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    if(btn.innerText.includes("Explore")){

        btn.addEventListener("click",()=>{

            document.getElementById("dashboard")
            .scrollIntoView({
                behavior:"smooth"
            });

        });

    }

});
buttons.forEach(btn => {

    if(btn.innerText.includes("Project")){

        btn.addEventListener("click",()=>{

            document.getElementById("vault")
            .scrollIntoView({
                behavior:"smooth"
            });

        });

    }

});
document.querySelectorAll(".project-card button").forEach((btn,index)=>{

btn.addEventListener("click",()=>{

const names=[
"Cyber Dashboard",
"Python Security Tools",
"Web Security Lab"
];

alert("Opening "+names[index]+"...");

});

});
const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});
function generatePassword(){

const chars=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

let password="";

for(let i=0;i<16;i++){

password+=chars.charAt(
Math.floor(Math.random()*chars.length)
);

}

document.getElementById("generatedPassword").value=password;

}



function copyPassword(){

const input=document.getElementById("generatedPassword");

if(!input.value){

alert("Generate a password first!");

return;

}

navigator.clipboard.writeText(input.value);

alert("Password copied successfully!");

}