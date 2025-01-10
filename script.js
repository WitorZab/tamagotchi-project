var honger = 100

function Honger(){
    var x = setInterval(function(){
        honger--;
        document.getElementById("honger").innerHTML = "Honger: " + honger
        emoties()
        dead()
        bars()
        if (honger < 0){
            clearInterval(x);
            document.getElementById("honger").innerHTML = ""
        }
    }, 1000);
}
Honger()

var slaap = 100

function Slaap(){
    var x = setInterval(function(){
        slaap--;
        document.getElementById("slaap").innerHTML = "Slaap: " + slaap
        emoties()
        dead()
        bars()
        if (slaap < 0){
            clearInterval(x);
            document.getElementById("slaap").innerHTML = ""
        }
    }, 1000);
}
Slaap()

var plezier = 100

function Plezier(){
    var x = setInterval(function(){
        plezier--;
        document.getElementById("plezier").innerHTML = "Plezier: " + plezier
        emoties()
        dead()
        bars()
        if (plezier < 0){
            clearInterval(x);
            document.getElementById("plezier").innerHTML = ""
        }
    }, 1000);
}
Plezier()

function add_points_honger(){
    if (honger <= 100 && honger >= 1){
        honger = honger + 10;
        if (honger > 100)
            honger = 100
        document.getElementById("emotie").innerHTML = "Yay!"
    }
    else if (honger <= 0){
        honger = honger + 0;
        document.getElementById("emotie").innerHTML = "";
    }

    setTimeout(function() {
        document.getElementById("emotie").innerHTML = "";
    }, 1500);
}

function add_points_slaap(){
    if (slaap <= 100 && slaap >= 1){
        slaap = slaap + 10;
        if (slaap > 100)
            slaap = 100
        document.getElementById("emotie").innerHTML = "Yay!"
    }
    else if (slaap <= 0){
        slaap = slaap + 0;
        document.getElementById("emotie").innerHTML = "";
    }
    
    setTimeout(function() {
        document.getElementById("emotie").innerHTML = "";
    }, 1500);
}

function add_points_plezier(){
    if (plezier <= 100 && plezier >= 1){
        plezier = plezier + 10;
        if (plezier > 100)
            plezier = 100
        document.getElementById("emotie").innerHTML = "Yay!"
    }
    else if (plezier <= 0){
        plezier = plezier + 0;
        document.getElementById("emotie").innerHTML = "";
    }

    setTimeout(function() {
        document.getElementById("emotie").innerHTML = "";
    }, 1500);
}

function emoties(){
    if (honger >= 75 || plezier >= 75 || slaap >= 75){
        document.getElementById("tamagotchi-emotie").src = "tamagotchi-happy.png";
    }
    if (honger <= 75 || plezier <= 75 || slaap <= 75){
        document.getElementById("tamagotchi-emotie").src = "tamagotchi.png";
    }
    if (honger <= 25 || plezier <= 25 || slaap <= 25){
        document.getElementById("tamagotchi-emotie").src = "tamagotchi-sad.png";
    }
    if (honger < 0 || plezier < 0 || slaap < 0){
        document.getElementById("tamagotchi-emotie").src = "tamagotchi-dead.png";
    }   
}

function dead(){
    if (honger < 0 || slaap < 0 || plezier < 0){
        honger = -1
        slaap = -1
        plezier = -1
        document.getElementById("dood").style.display = "block"
        document.getElementById("honger").innerHTML = ""
        document.getElementById("plezier").innerHTML = ""
        document.getElementById("slaap").innerHTML = ""
        document.querySelector(".honger-bar").style.display = "none"
        document.querySelector(".slaap-bar").style.display = "none"
        document.querySelector(".plezier-bar").style.display = "none"
    }
}
dead()

function revive(){
    if (honger > 0 && slaap > 0 && plezier > 0) {
        document.getElementById("emotie2").innerHTML = "Im alive";
        setTimeout(function() {
            document.getElementById("emotie2").innerHTML = "";
        }, 1500);
        return;
    }

    honger = 100;
    slaap = 100;
    plezier = 100;

    document.getElementById("dood").style.display = "none"
    document.querySelector(".honger-bar").style.display = "block"
    document.querySelector(".slaap-bar").style.display = "block"
    document.querySelector(".plezier-bar").style.display = "block"
    document.getElementById("honger").innerHTML = "honger: " + honger;
    document.getElementById("slaap").innerHTML = "slaap: " + slaap;
    document.getElementById("plezier").innerHTML = "plezier: " + plezier;

    document.getElementById("tamagotchi-emotie").src = "tamagotchi-happy.png";
    document.getElementById("emotie2").innerHTML = "Revived!";
    
    setTimeout(function() {
        document.getElementById("emotie2").innerHTML = "";
    }, 1500);

    Honger();
    Slaap();
    Plezier();
    dead()
    bars()
}

function bars() {
    document.getElementById("honger-bar-inner").style.width = (honger) + "%";
    document.getElementById("slaap-bar-inner").style.width = (slaap) + "%";
    document.getElementById("plezier-bar-inner").style.width = (plezier) + "%";
}