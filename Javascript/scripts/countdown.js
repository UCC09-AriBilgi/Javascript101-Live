var sayac = 100;

function say() {
	document.getElementById("kutu1").innerHTML = sayac;
	sayac--;

	if (sayac == 0) {
		document.write("İşlem bitti...");
	}
}