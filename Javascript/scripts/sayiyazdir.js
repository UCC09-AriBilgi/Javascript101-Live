function sayigoster() {
    var sayi1 = document.getElementById("sayi1").value;
    var sayi2 = document.getElementById("sayi2").value;

    var gosterilecek = "Girmiş olduğunuz sayilar : " + sayi1 + " ve " + sayi2 + " dir..";
    document.getElementById("Mesaj").innerHTML = gosterilecek;

}