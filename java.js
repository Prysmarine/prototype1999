var div = "";
var owned = [];
const avail = [];


//saves the owned array to local storage
function saveUnits() {
    if (typeof(Storage) !== "undefined") {
        // Store
        console.log("Storage is available");
        var store = JSON.stringify(owned);
        localStorage.setItem("owned", store);   
        console.log("Units saved"); 
    }
    else
    {
        console.log("Storage Unavailable");
    }
}



//loads the owned array from local storage
function loadUnits() {
    // Retrieve
    console.log("Attempting to Load Units");
    let retString = localStorage.getItem("owned");
    owned = JSON.parse(retString);
    console.log('Retrieved: ', owned);
    displayOwned();
    console.log("Units displayed, adjusting icons");

//------------------------------------------
//This wrapped code is duplicated from dim() 
//so as not to delete the array
    var i = 0;
    while (i < owned.length)
    {
        div = document.getElementById(owned[i]);
        div.classList.toggle("darken");
        i++;
    }
//This wrapped code is duplicated from dim() 
//so as not to delete the array
//------------------------------------------

    
}




//dims and brightens the unit icons on click
function dim(x) {
    div = document.getElementById(x);
        //toggles the icon class darken on and off, the class can be found in styelsheet.css
    div.classList.toggle("darken");
    ownedAdjust(x);
}




//adds to, or removes units from the owned[] array
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
    saveUnits();
    displayOwned();
}




//outputs the array contents
function displayOwned() {
    console.log(owned);
    var i = 0;
    var dis = document.getElementById("owned");
    owned.sort();
    dis.innerHTML = "";
    
    while (i < owned.length)
    {
        //creating the new img element for the div array
        var img = document.createElement("img");
        var j = stringReplace(owned[i]);
        img.setAttribute("src", "img/" + j + "_Icon.webp");

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





//quick clears the owned units array
function clearArray() {
    var i = 0;

    while(i < owned.length)
    {
        var x = owned[i];
        div = document.getElementById(x);      
        div.classList.toggle("darken");
        i++
    }

    owned.length = 0;
    saveUnits();
    displayOwned();
}