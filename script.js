function createFlower(){

let flower=document.createElement("div");

flower.className="flower";


let flowers=[
"🌹",
"🌸",
"🌺",
"💮",
"❤️"
];


flower.innerHTML=
flowers[Math.floor(Math.random()*flowers.length)];


flower.style.left=
Math.random()*100+"vw";


flower.style.animationDuration=
(5+Math.random()*5)+"s";


flower.style.fontSize=
(20+Math.random()*30)+"px";


document.body.appendChild(flower);



setTimeout(()=>{

flower.remove();

},8000);


}



setInterval(createFlower,500);