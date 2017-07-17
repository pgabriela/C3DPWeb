function displayPDF() {
	document.getElementById("pictCarousel").style.display = "none";
	document.getElementById("divPDF").style.display = "block";
}
function displayHome() {
	document.getElementById("pictCarousel").style.display = "block";
	document.getElementById("divPDF").style.display = "none";
}
function displayPDFMobile() {
	document.getElementById("targetPDF").style.height = "400px";
	document.getElementById("pictCarousel").style.display = "none";
	document.getElementById("divPDF").style.display = "block";
}
