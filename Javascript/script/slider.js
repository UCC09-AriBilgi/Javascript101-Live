// Global değişgenler
var slayt = document.getElementsByClassName("slide") // dizi
var slaytSayisi = slide.length;
var slaytNo = 0;
var i = 0;

slaytGoster(slaytNo);

function slaytGoster(slaytNumarasi) {
    slaytNo = slaytNumarasi;

    document.write(slaytNo);

    // Önceki/Sonraki butonlarına göre ilk/son slide kontrolu
    if (slaytNumarasi >= slaytSayisi) slaytNo = 0;

    if (slaytNumarasi < 0) slaytNo = slaytSayisi - 1;

    for (i = 0; i < slaytSayisi; i++) {
        slayt[i].style.display = "none";
    }

    slayt[slaytNo].style.display = "block";

}

function sonrakiSlayt() {

    slaytNo++;
    slaytGoster(slaytNo);
}

function oncekiSlayt() {

    slaytNo--;
    slaytGoster(slaytNo);
}
