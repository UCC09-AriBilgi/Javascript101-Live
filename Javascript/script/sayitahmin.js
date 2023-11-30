function yaz() {
    var tutulansayi = Math.floor(Math.random() * 10);

    var tahmin;

    var sayac;

    while (tahmin != tutulansayi) {
        tahmin = eval(prompt("Tahminini yap", ""));
        sayac++;

        document.getElementById("tahminler").innerHTML += tahmin + " ";

        if (tahmin < tutulansayi) {
            document.getElementById("ipucu").innerHTML = sayac + "- YUKARI";
        }

        if (tahmin > tutulansayi) {
            document.getElementById("ipucu").innerHTML = sayac + "- AŞAĞI";
        }

    }

    document.getElementById("snc").innerHTML = "TEBRİKLEEERRR " + sayac + ".denemede buldunuz...";
    document.getElementById("ipucu").innerHTML = "";
}