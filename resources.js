const btn = document.getElementById("home__btn");
const cpd = document.getElementById("copyrights");
btn.addEventListener("click",() => {
	window.location.href = "https://www.johnmburu761.github.io";
})

cpd.appendChild(document.createTextNode(new Date().getFullYear()));
