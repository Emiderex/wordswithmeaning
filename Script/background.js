//const button = document.querySelector("button")
//const body = document.querySelector("body")

//const color = ["black", "red", "yellow"]

//body.style.backgroundColor = "violet"

//button.addEventListener ('click, changeB')

//function changeB(){
  //const colorIndex = parseInt(Math.random()*color.length)
  //body.style.backgroundColor = color[colorIndex]
//}

const body = document.querySelector('body');
const service = document.querySelector('sv-tab');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
toggle.classList.toggle('active');
body.classList.toggle('active');
service.classList.toggle('active');
}
