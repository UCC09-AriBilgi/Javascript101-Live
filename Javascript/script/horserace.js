// ekrandaki img leri bir değişgene alıyorum.
var horse1 = document.getElementById("horse1");
var horse2 = document.getElementById("horse2");
var horse3 = document.getElementById("horse3");
var horse4 = document.getElementById("horse4");
var horse5 = document.getElementById("horse5");

var bitis = document.getElementById("bitis").offsetLeft - 120;

// random oluşacak değerleri tutacak değişgenler
var rnd1 = 0, rnd2 = 0, rnd3 = 0, rnd4 = 0, rnd5 = 0;

var kontrol = false;

function Baslat() {
    yarisma = setInterval(Yarisma, 200);
}

var Yarisma = function () {
    atbir();
    atiki();
    atuc();
    atdort();
    atbes();
}

var rastgeleSayiUret = function () {
    var rnd;

    do {
        rnd = Math.floor(Math.random() * 100); // random sayı üretme
    } while (rnd < 20);

    return rnd;
}

function atbir() {
    if (rnd1 < bitis) {// hala daha atım finish çizgisine ulasmamıstır
        rnd1 += rastgeleSayiUret();
        if (rnd1 >= bitis) {

            rnd1 = bitis;

            clearInterval(yarisma);

            if (!kontrol) {
                kontrol = true;
                //setTimeout(function () {
                //    alert("Kazanan at : 1.At");
                //}, 2000);
                document.getElementById("kazanan").innerHTML = "Kazanan at : 1";
                horse1.style.marginLeft = bitis + "px";
            }
            else {
                horse1.style.marginLeft = rnd1 + "px";
            }

        }



    }
}

function atiki() {
    if (rnd2 < bitis) {// hala daha atım finish çizgisine ulasmamıstır
        rnd2 += rastgeleSayiUret();
        if (rnd2 >= bitis) {

            rnd2 = bitis;

            clearInterval(yarisma);

            if (!kontrol) {
                kontrol = true;
                //setTimeout(function () {
                //    alert("Kazanan at : 2.At");
                //}, 2000);
                document.getElementById("kazanan").innerHTML = "Kazanan at : 2";
                horse2.style.marginLeft = bitis + "px";
            }
            else {
                horse2.style.marginLeft = rnd2 + "px";
            }

        }
    }
}

function atuc() {
    if (rnd3 < bitis) {// hala daha atım finish çizgisine ulasmamıstır
        rnd3 += rastgeleSayiUret();
        if (rnd3 >= bitis) {

            rnd3 = bitis;

            clearInterval(yarisma);

            if (!kontrol) {
                kontrol = true;
                //setTimeout(function () {
                //    alert("Kazanan at : 3.At");
                //}, 2000);
                document.getElementById("kazanan").innerHTML = "Kazanan at : 3";
                horse3.style.marginLeft = bitis + "px";
            }
            else {
                horse3.style.marginLeft = rnd3 + "px";
            }

        }
    }
}

function atdort() {
    if (rnd4 < bitis) {// hala daha atım finish çizgisine ulasmamıstır
        rnd4 += rastgeleSayiUret();
        if (rnd4 >= bitis) {

            rnd4 = bitis;

            clearInterval(yarisma);

            if (!kontrol) {
                kontrol = true;
                //setTimeout(function () {
                //    alert("Kazanan at : 4.At");
                //}, 2000);
                document.getElementById("kazanan").innerHTML = "Kazanan at : 4";
                horse4.style.marginLeft = bitis + "px";
            }
            else {
                horse4.style.marginLeft = rnd4 + "px";
            }

        }



    }
}

function atbes() {
    if (rnd5 < bitis) {// hala daha atım finish çizgisine ulasmamıstır
        rnd5 += rastgeleSayiUret();
        if (rnd5 >= bitis) {

            rnd5 = bitis;

            clearInterval(yarisma);

            if (!kontrol) {
                kontrol = true;
                //setTimeout(function () {
                //    alert("Kazanan at : 5.At");
                //}, 2000);
                document.getElementById("kazanan").innerHTML = "Kazanan at : 5";
                horse5.style.marginLeft = bitis + "px";
            }
            else {
                horse5.style.marginLeft = rnd5 + "px";
            }

        }
    }
}