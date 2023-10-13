// ====== Mileage Tracker =======

// ====== Form validation ======

let subBtn = document.getElementById('submit');
let fuelPrice = document.getElementById("fuelPrice");
let fuelAmount = document.getElementById("fuelAmount");
let reserve1 = document.getElementById("reserve1");
let reserve2 = document.getElementById("reserve2");
let popup = document.getElementById("popup");
let error = document.getElementById('error');
let resultImage = popup.querySelector('img');
let resultHead = popup.querySelector('h2');
let resultEl = popup.querySelector('span');
let mileage;
    
let regEx = /^[0-9]+$/

subBtn.addEventListener('click', validateForm);

function validateForm() {

if(!reserve1.value.match(regEx)) {
    error.innerText = "Invalid Input!!!";
    error.style.visibility = "visible";
    return false

}else if(!reserve2.value.match(regEx)) {
    error.style.visibility = "visible";
    error.innerText = "Invalid Input!!!";
    return false

}else if(!fuelAmount.value.match(regEx)) {
    error.style.visibility = "visible";
    error.innerText = "Invalid Input!!!";
    return false

}else if(!fuelPrice.value.match(regEx)) {
    error.style.visibility = "visible";
    error.innerText = "Invalid Input!!!";
    return false

}

// else if(reserve2.value < reserve1.value){
//   error.style.visibility = "visible";
//   error.innerText = "Invalid Meeter Reading!!!";
//   return false

// }

else{
    error.innerHTML = '';
    checkMileage();
    
}
}

// Function for checking mileage
function checkMileage(){
let distance = (reserve2.value - reserve1.value);  
let fuelQuantity = (fuelAmount.value / fuelPrice.value);
mileage = (distance / fuelQuantity);
popupReset();
configPopup();
openPopup();
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

// Function for Reseting Popup
function popupReset() {
resultHead.innerHTML = "";
resultImage.innerHTML = "";
resultEl.innerHTML = "";
}

// Function for opening Popup
function openPopup(){
popup.classList.add("open");
}

// Function for Closing Popup
function closePopup(){
popup.classList.remove("open");
}