window.addEventListener("load", () =>{
    let flick = 1;
    setInterval (function() {
        if (flick === 1) {
            document.getElementById("red1").style.backgroundColor = "green"
            document.getElementById("red2").style.backgroundColor = "green"
            document.getElementById("green1").style.backgroundColor = "red"
            document.getElementById("green2").style.backgroundColor = "red"

            document.getElementById("red1").style.border = "2px solid green"
            document.getElementById("red2").style.border = "2px solid green"
            document.getElementById("green1").style.border = "2px solid red"
            document.getElementById("green2").style.border = "2px solid red"
        } else {
            document.getElementById("red1").style.backgroundColor = "red"
            document.getElementById("red2").style.backgroundColor = "red"
            document.getElementById("green1").style.backgroundColor = "green"
            document.getElementById("green2").style.backgroundColor = "green"

            document.getElementById("red1").style.border = "2px solid red"
            document.getElementById("red2").style.border = "2px solid red"
            document.getElementById("green1").style.border = "2px solid green"
            document.getElementById("green2").style.border = "2px solid green"
        }

        flick *= -1
    }, 250)
})