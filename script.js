function sendRate() {
	if (document.querySelector("input[name=starSelect]:checked")) {
		starVal = document.querySelector("input[name=starSelect]:checked").value;
		document.getElementById("selected").innerHTML = "You selected " + starVal + " out of 5";
		document.getElementById("state1").style.display = "none";
		document.getElementById("alert").style.display = "none";
		document.getElementById("state2").style.display = "flex";
		document.getElementById("state2").style.animation = "show 2s";
	}
	else {
		document.getElementById("alert").style.display = "flex";
	}
}