// =======================
// PASSWORD GENERATOR
// =======================

function generatePassword() {

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

let password = "";

for (let i = 0; i < 16; i++) {
password += chars.charAt(
Math.floor(Math.random() * chars.length)
);
}

const box = document.getElementById("generatedPassword");

if(box){
box.value = password;
}

}

function copyPassword(){

const box=document.getElementById("generatedPassword");

if(!box || box.value===""){
alert("Generate password first");
return;
}

navigator.clipboard.writeText(box.value);

alert("Copied!");
}



// =======================
// PASSWORD STRENGTH
// =======================

function checkStrength(){

const input=document.getElementById("strengthInput");
const result=document.getElementById("strengthResult");

if(!input || !result) return;

const pass=input.value;

if(pass.length===0){

result.innerHTML="Enter Password";
result.style.color="#00ff66";
return;

}

let score=0;

if(pass.length>=8) score++;
if(/[A-Z]/.test(pass)) score++;
if(/[a-z]/.test(pass)) score++;
if(/[0-9]/.test(pass)) score++;
if(/[!@#$%^&*]/.test(pass)) score++;

if(score<=2){

result.innerHTML="🔴 Weak";

}
else if(score<=4){

result.innerHTML="🟡 Medium";

}
else{

result.innerHTML="🟢 Strong";

}

}



// =======================
// BASE64
// =======================

function encodeBase64(){

const input=document.getElementById("baseInput");
const output=document.getElementById("baseOutput");

if(!input || !output) return;

output.value=btoa(input.value);

}

function decodeBase64(){

const input=document.getElementById("baseInput");
const output=document.getElementById("baseOutput");

if(!input || !output) return;

try{

output.value=atob(input.value);

}catch{

output.value="Invalid Base64";

}

}
// =======================
// SHA-256 HASH GENERATOR
// =======================

async function generateHash() {

    const input = document.getElementById("hashInput");
    const output = document.getElementById("hashOutput");

    if (!input || !output) return;

    const text = input.value.trim();

    if (text === "") {
        output.value = "Enter text first!";
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

    output.value = hashHex;
}