const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const clr=document.querySelector(".color");

btn.addEventListener('click',function(){
 let hexClr="#";
 for( let i=0;i<6;i++){
     hexClr+=hex[getRandomNumber()];
 }

 document.body.style.backgroundColor = hexClr;
  clr.textContent = hexClr;
  clr.style.color = hexClr;

})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }