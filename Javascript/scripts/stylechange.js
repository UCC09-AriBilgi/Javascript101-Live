function styledegistir() {

    var eleman = document.getElementsByClassName("yazi1"); // sayfa üzerindeki class tanımı yazi1 olan tüm elemanları seçiyor.

    var index;

    // documandaki tüm elamanları dolasarak bir stil özelliği değiştirecek
    for (var index = 0; index < eleman.length; index++) {
        eleman[index].style.color = "red";
        eleman[index].style.fontSize = "30px";
    }
}