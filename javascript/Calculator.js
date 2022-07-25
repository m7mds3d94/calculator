

    var onOff = document.querySelector(".toggle")
    var Buttons = document.querySelectorAll(".btn")
    var screen = document.querySelector("p");
    var clear = document.getElementById("clear");
    var bigScreen = document.querySelector(".screen");
    var clearOne = document.querySelector("#modulu");
    

    for (var i = 0; i < Buttons.length; i++) {
        if (Buttons[i].innerHTML === "=") {
            Buttons[i].addEventListener("click", calcu(i))
        } else {
            Buttons[i].addEventListener("click", target(i))
        }

    }


onOff.onclick = function () {
    if(screen.getAttribute("value") === "0") {
        bigScreen.classList.add("opa");
        onOff.innerHTML = "on";
        screen.style.display = "none";
        onOff.classList.add("on");
        screen.setAttribute("value", "1");
    } else {
        screen.getAttribute("value");
        bigScreen.classList.remove("opa");
        onOff.innerHTML = "off";
        screen.innerHTML = "";
        screen.style.display = "block";
        onOff.classList.remove("on");
        screen.setAttribute("value", "0");

    }
}

    function target(i) {
        return function() {            
            screen.innerHTML += Buttons[i].innerHTML;
            
        }
        
    }
    clear.onclick = function (){
        
        screen.innerHTML = "";
    }

    function calcu(i) {
        return function () {
            
            screen.innerHTML = eval(screen.innerHTML);    
        }
    }









 



