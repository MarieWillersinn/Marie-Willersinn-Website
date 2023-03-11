var id = null;

function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);

    function frame() {
        if (pos == 1250) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}

var text = new Array();
text[0] = 'hidemeta';

// text[1] = 'hidemetd';
// usw.

function toggle(id) {

    setTimeout(() => {


        if (document.getElementById(id).style.display == "none") {
            for (i = 0; i < text.length; i++) {
                document.getElementById(text[i]).style.display = "none";
            }
            document.getElementById(id).style.display = "block";
        } else {
            document.getElementById(id).style.display = "none";
        }
    }, 8000);
}