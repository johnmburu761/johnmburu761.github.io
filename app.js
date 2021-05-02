const hmbtn = document.getElementById("hm_btn")
const abbtn = document.getElementById("hm_btn2");
hmbtn.addEventListener("click",() => {
	window.location.href = "#";
})
abbtn.addEventListener('click',() => {
	window.location.href = "#about";
})



const csy = (new Date).getFullYear();


const cps =  document.getElementById("copyrights");
cps.appendChild(document.createTextNode(csy));