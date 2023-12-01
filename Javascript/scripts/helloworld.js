function hw() {
    alert("Javascript dünyasına hoş geldiniz...");
}

function degistir() {
    // ekrandaki varolan bir element(tag) içeriği ile oynamak
    document.getElementById("demo").innerHTML = "Paragraf şimdi değişti";
}

function tarihgoster() {
    // dd.mm.yyyy ??
    document.write("Bügünün tarihi : " + Date())
}