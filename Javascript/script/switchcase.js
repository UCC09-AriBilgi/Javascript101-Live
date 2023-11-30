function hesapla() {
    var a = parseInt(document.getElementById("kutu1").value);

    switch (a) {
        case 1:
            document.getElementById("sonuc").innerHTML = "<font color='red'>Zayıf bir not aldınız. Biraz daha gayret lütfen...</font>";
            break;
        case 2:
            document.getElementById("sonuc").innerHTML = "<font color='green'>Geçer not aldınız...</font>";
            break;
        case 3:
            document.getElementById("sonuc").innerHTML = "<font color='orange'>Koşullu geçer not aldınız...</font>";
            break;
        case 4:
            document.getElementById("sonuc").innerHTML = "<font color='yellow'>İyi sayılabilecek bir not aldınız...</font>";
            break;
        case 5:
            document.getElementById("sonuc").innerHTML = "<font color='maroon'>Süper bir not aldınız...</font>";
            break;
        default:
            document.getElementById("sonuc").innerHTML = "<font color='red'>Hatalı bilgi girildi...</font>";
            break;
    }
}