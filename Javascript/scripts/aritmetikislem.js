function topla() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var gosterilecek = sayi1 + sayi2;

    document.getElementById("Mesaj").innerHTML = "Toplam = " + gosterilecek;
}