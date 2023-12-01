function selectolustur() {
    var yillar = document.getElementById("yillar");

    for (var i = 1965; i <= 2030; i++) {
        yillar.options[yillar.options.lenght] = new Option(i, i);
    }

}