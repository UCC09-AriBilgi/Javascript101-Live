function pencereac() {
    window.open("kapat.html", "MESAJ", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizeable=no,width=280,height=400,left=200,screenX=200,screenY=300,top=300");
}

function pencerekapat() {
    var cevap = confirm("Gerçekten sayfadan ayrılmak istiyor musunuz?");

    if (cevap == true) {
        window.close();
    }
}