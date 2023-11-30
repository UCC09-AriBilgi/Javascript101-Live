setTimeout(aaa, 3000);

function aaa() {
    document.getElementById("kutu1").innerHTML = "Süre doldu...";

}

// saniyede 2 defa tetiklenecek
var x = setInterval(bbb, 500)

function bbb() {
    document.getElementById("kutu2").innerHTML += ".";
}

setTimeout(iptal, 15000);

function iptal() {
    clearInterval(x);
}

setInterval(zamanGoster, 1000);// her 1 saniye(1000 msn)

function zamanGoster() {
    var saat = new Date();

    document.getElementById("kutu3").innerHTML = saat.toLocaleTimeString(); // date hem tarih hem saati tutuyor. ama ben burada sadece saat kısmını ekrana basıyorum.

}