var div = "";
const owned = ["Sonetto"];

//This function dims and brightens the unit icons on click
function dim(x) {
    div = document.getElementById(x);
        //toggles the icon class darken on and off, the class can be found in styelsheet.css
    div.classList.toggle("darken");
    ownedAdjust(x);
}

//This function adds to, or removes units from the owned[] array
function ownedAdjust(x) {
    //local variable to store the result of indexOf()
    var z;
    //if the length of the array is 0, add the unit - array is empty so no need to verify if it exists
    if (owned.length == 0)
    {
        owned.push(x);
    }
    else 
    {
        //checks the array for the index of unit x passed in from the image ID set in html
        z = owned.indexOf(x);
        switch(z)
        {
            case -1:
                //in the case of -1 return value, the unit does not exist so add the unit
                owned.push(x);
                break;
            default:
                //in every other case the unit exists, so remove the unit
                owned.splice(z, 1);
                break;
        }
        
    }
    
    displayOwned();
}

//outputs the array contents
function displayOwned() {
    var i = 0;
    var dis = document.getElementById("owned");

    owned.sort();
    dis.innerHTML = "";
    while (i < owned.length)
    {
        dis.innerHTML += owned[i] + "<br>";
        i++;
    }
}