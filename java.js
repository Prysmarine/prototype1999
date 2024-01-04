var div = "";
const owned = [];
const avail = [];



function populate()
{
    document.getElementById("bug").innerHTML += "populate() called";
    var ancestor = document.getElementById("units");
    var descendants = ancestor.getElementsByID('*');
    document.getElementById("bug").innerHTML += "<br>finished descendants";

    var i;
    for (i=0; i < descendents.length; ++i)
    {
        document.getElementById("bug").innerHTML += "<br>for loop";
        avail.push(i);
    }
    bug.innerHTML  += "for loop done";

    populateDisplay();
}

function populateDisplay()
{
    bug.innerHTML += "popDis() called";
    foreach (x in avail)
    {
        bug.innerHTML += "<br>" + x;
    }
}

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
    //var bug = document.getElementById("bug");
    owned.sort();
    dis.innerHTML = "";
    bug.innerHTML = "";
    
    while (i < owned.length)
    {
        //creating the new img element for the div array
        var img = document.createElement("img");
        var j = stringReplace(owned[i]);
        img.setAttribute("src", "img/" + j + "_Icon.webp");
        //the line blow outputs the above line for debugging purposes
        //bug.innerHTML += "<br>img/" + j + "_Icon.png";
        img.setAttribute("id", owned[i]);
        //append the newly created img to the div
        dis.appendChild(img);
        i++;
    }
}

//replace the spaces in the unit ID names with underscores
function stringReplace(x) {
    var z = x.replace(/ /g, '_');
    return z;
}