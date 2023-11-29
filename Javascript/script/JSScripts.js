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