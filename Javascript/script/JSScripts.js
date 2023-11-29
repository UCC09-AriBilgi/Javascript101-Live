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

function selectolustur() {
    var yillar = document.getElementById("yillar");

    for (var i = 1965; i <= 2030; i++) {
        yillar.options[yillar.options.lenght] = new Option(i, i);
    }
        
}

function styledegistir() {

    var eleman = document.getElementsByClassName("yazi1"); // sayfa üzerindeki class tanımı yazi1 olan tüm elemanları seçiyor.

    var index;

    // documandaki tüm elamanları dolasarak bir stil özelliği değiştirecek
    for (var index = 0; index < eleman.length; index++) {
        eleman[index].style.color = "red";
        eleman[index].style.fontSize = "30px";
    }
}

function pencereac() {
    window.open("kapat.html", "MESAJ", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizeable=no,width=280,height=400,left=200,screenX=200,screenY=300,top=300");
}

function pencerekapat() {
    var cevap = confirm("Gerçekten sayfadan ayrılmak istiyor musunuz?");

    if (cevap == true) {
        window.close();
    }
}

function daralt(){
    document.getElementById("kutu").className = "dar";
}

function normal(){
    document.getElementById("kutu").className = "normal";
}

function genislet(){
    document.getElementById("kutu").className = "genis";
}

function uzerimde() {
    document.getElementById("metin2").innerHTML = "Fare üzerimde";
}

function disarida() {
    document.getElementById("metin2").innerHTML = "Fare üzerimde değil";
}

// Farklı fonksiyonlar

function tiklandi() {
    document.getElementById("metin1").innerHTML = "Tıklandı";
}

function basildi() {
    document.getElementById("metin3").innerHTML = "Mouse tuşuna tıklandı";
}

function birakildi() {
    document.getElementById("metin3").innerHTML = "Mouse tuşu bırakıldı";
}

// GetValues
function yaz() {
    var a = document.getElementById("kutu1").value;

    document.getElementById("snc1").innerHTML = a;
}

function artir() {
    var b = parseInt(document.getElementById("kutu2").value);

    b++;

    document.getElementById("kutu2").value = b;
}

function azalt() {
    var b = parseInt(document.getElementById("kutu2").value);

    b--;

    document.getElementById("kutu2").value = b;
}

function htmlEkle() {
    document.getElementById("snc3").innerHTML = "<table width='150' border='1' cellspacing= '0' callpadding='3'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td></tr></table>"
}

// Countdown
var sayac = 10;

function say() {
    document.getElementById("kutu1").innerHTML = sayac;
    sayac--;

    if (sayac == 0) {
        document.write("İşlem bitti...");
    }
}
