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