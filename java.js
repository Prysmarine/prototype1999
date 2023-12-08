var div = "";
var test = "";
const owned = [];

function testing(x) {
    div = document.getElementById("testP");
    div.innerHTML = "Successful Click of " + x;
}


function dim(x) {
    div = document.getElementById(x);
    div.classList.toggle("darken");
    ownedAdjust(x);
}

function ownedAdjust(x) {
    var pos;
    var match = false;
    test = document.getElementById("testP");
    test.innerHTML = "Entered Adjust";
    var i = units.length;
    do{
        test.innerHTML += "<br>Started While Loop";           
        if(x == unit[i]) {
            test.innerHTML += "<br>Match Found.";
            match = true;
            pos = i;
            break;
        }
    } while(i > 0)
    test.innerHTML += "<br>Ended While Loop. Match status is: " + match;
    if (match)
    {
        test.innerHTML += "<br>Entered Matching Removal."
        unit.splice(i, 1);
    }
    else
    {
        unit.push(x);
    }
    test.innerHTML += "<br>Number of units in the array is: " + unit.length;
        
    
    displayOwned();
}

function displayOwned() {
    var i = 0;
    test = document.getElementById("testP");
    test.innerHTML += "<br>Entered displayOwned<br>";
    while (i < owned.length)
    {
        document.getElementById("unitList").innerHTML += owned[i];
        i++
    }
    test.innerHTML += "<br>Finished displayOwned";
}