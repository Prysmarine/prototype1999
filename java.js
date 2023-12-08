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
    test = document.getElementById("testP");
    test.innerHTML = "Entered Adjust";
    var z;
    if (owned.length == 0)
    {
        test.innerHTML += "<br>owned length is /" + owned.length;
        owned.push(x);
        test.innerHTML += "<br>owned length is now /" + owned.length;
    }
    else 
    {
        test.innerHTML += "<br>entered the else statement";
        z = owned.findIndex(checkOwned, x)
        test.innerHTML += "<br>" + z;
        switch(z)
        {
            case -1:
                test.innerHTML += "<br> case -1";
                owned.push(x);
                break;
            default:
                test.innerHTML += "<br> case default";
                owned.splice(z, 1);
                break;
        }
        
    }
    displayOwned();
}

function checkOwned(x)
{
    document.getElementById("testP").innerHTML += "<br>getting the index of unit";
    return owned.x == this.x;
    
}


function displayOwned() {
    i = 0;
    test = document.getElementById("testP");
    test.innerHTML += "<br>Entered displayOwned<br>owned.length is " + owned.length;
    document.getElementById("unitList").innerHTML = "This will be where the units are listed.";
    while (i < owned.length)
    {
        test.innerHTML += "<br>Entered display while loop. value is " + i + " " + owned.length;
        if (owned.length == 0)
        {
            test.innerHTML += "<br> entered the IF statement";
            document.getElementById("unitList").innerHTML = "no units";
        }
        test.innerHTML += "<br>passed the if statement";
        document.getElementById("unitList").innerHTML += owned[i];
        i++;
    }
    test.innerHTML += "<br>Finished displayOwned";
}