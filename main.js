var MAN_SPEED = 10;
var BIKE_SPEED = 40;
var CAR_SPEED = 70;
var PLANE_SPEED = 200;
var elMan = document.querySelector(".text-man");
var elBike = document.querySelector(".text-bike");
var elCar = document.querySelector(".text-car");
var elPlane = document.querySelector(".text-plane");
var elForm = document.querySelector(".heading");
var input = document.querySelector(".input");
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    var resultMan = input.value/MAN_SPEED;
    var resultBike = input.value/BIKE_SPEED;
    var resultCar = input.value/CAR_SPEED;
    var resultPlane = input.value/PLANE_SPEED;
    elMan.textContent = `${Math.floor(resultMan)} soat ${Math.round( (resultMan - Math.floor(resultMan))*60 )}minut`
    elBike.textContent = `${Math.floor(resultBike)} soat ${Math.round(  (resultBike - Math.floor(resultBike))*60  )} minut`
    elCar.textContent = `${Math.floor(resultCar)} soat ${Math.round(  (resultCar - Math.floor(resultCar))*60  )} minut`
    elPlane.textContent = `${Math.floor(resultPlane)} soat ${Math.round(  (resultPlane - Math.floor(resultPlane))*60  )} minut`
})