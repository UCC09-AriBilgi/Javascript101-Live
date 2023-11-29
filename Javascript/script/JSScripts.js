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

function sayigoster() {
    var sayi1 = document.getElementById("sayi1").value;
    var sayi2 = document.getElementById("sayi2").value;

    var gosterilecek = "Girmiş olduğunuz sayilar : " + sayi1 + " ve " + sayi2 + " dir..";
    document.getElementById("Mesaj").innerHTML = gosterilecek;

}

function topla() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var gosterilecek = sayi1 + sayi2;

    document.getElementById("Mesaj").innerHTML = "Toplam = " + gosterilecek;
}