// ====== Mileage Tracker =======


// Animation
AOS.init();


let mileage;
let boxArea = document.querySelector(".box-area");
let error = document.getElementById('error');
let popup = document.getElementById("popup");

let resultImage = popup.querySelector('img');
let resultHead = popup.querySelector('h2');
let resultEl = popup.querySelector('span');

// ====== Check Mileage ======
function calculateMileage() {
let startingReading = parseFloat(document.getElementById("startReading").value);
let endingReading = parseFloat(document.getElementById("endReading").value);
let totalCost = parseFloat(document.getElementById("fuelCost").value);
let fuelPricePerLiter = parseFloat(document.getElementById("fuelPrice").value);

if (startingReading >= 0 && endingReading > startingReading && totalCost > 0 && fuelPricePerLiter > 0) {
    error.innerText = ""
    let distanceTraveled = endingReading - startingReading;
    let totalFuelConsumed = totalCost / fuelPricePerLiter;
    mileage = distanceTraveled / totalFuelConsumed;
    mileage = Math.round(mileage*10)/10;
    console.log(mileage);
    console.log(typeof mileage);
    popupReset()
    configPopup()
    openPopup()

    } else if (startingReading >= endingReading) {
        error.style.visibility = "visible";
        error.innerText = "Invalid Meeter Reading!!!";
    } else {
        error.innerText = "Invalid Input!!!";
        error.style.visibility = "visible";
    }
}

        
        


// Function for Reseting Popup
function popupReset() {
    resultHead.innerHTML = "";
    resultImage.innerHTML = "";
    resultEl.innerHTML = "";
}

// Function for Configuring Result Popup
function configPopup() {
    if(mileage > 70) {
        resultImage.setAttribute('src', './img/woww.png')
        resultHead.innerHTML = "WooowwW!!!";
        resultEl.innerHTML = `Your Mileage is <strong>${mileage} Kms/L</strong>`;
    }
    else if(mileage > 50) {
        resultImage.setAttribute('src', './img/great-express.png')
        resultHead.innerHTML = "Great!!!";
        resultEl.innerHTML = `Your Mileage is <strong>${mileage} Kms/L</strong>`;
    }
    else if(mileage > 40) {
        resultImage.setAttribute('src', './img/nice.png')
        resultHead.innerHTML = "Nice!!!";
        resultEl.innerHTML = `Your Mileage is <strong>${mileage} Kms/L</strong>`;
    }

    else if(mileage > 30) {
        resultImage.setAttribute('src', './img/ooops.png')
        resultHead.innerHTML = "Oooopsss!!!";
        resultEl.innerHTML = `Your Mileage is <strong>${mileage} Kms/L</strong>`;
        
    }
    else{
        resultImage.setAttribute('src', './img/sad.png')
        resultHead.innerHTML = "Ooohh Daarkk!!!";
        resultEl.innerHTML = `Your Mileage is <strong>${mileage} Kms/L</strong>`;
    }
}

// Function for opening Popup
function openPopup(){
    popup.classList.add("open");
    boxArea.classList.add("blur");
}
        

// Function for Closing Popup
function closePopup(){
    popup.classList.remove("open");
    boxArea.classList.remove("blur");
}