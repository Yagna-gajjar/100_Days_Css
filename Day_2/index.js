clickBoolean = 0
line1 = document.getElementById("line1")
line2 = document.getElementById("line2")
line3 = document.getElementById("line3")
function makeoneline() {
    if (clickBoolean == 0) {
        clickBoolean = 1;
        document.getElementById("line1").classList.toggle("line1animation")
        document.getElementById("line2").classList.toggle("line2animation")
        document.getElementById("line3").classList.toggle("line3animation")
    }
    else {
        clickBoolean = 1;
        document.getElementById("line1").classList.toggle("rev-line1animation")
        document.getElementById("line2").classList.toggle("rev-line2animation")
        document.getElementById("line3").classList.toggle("rev-line3animation")
    }
}
