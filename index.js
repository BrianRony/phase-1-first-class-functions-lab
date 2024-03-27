const drivers = ["Antonia","Nuru","Amari","Mo"];

function returnFirstTwoDrivers (drivers){
    return (drivers.slice(0,2));
}
function returnLastTwoDrivers (drivers){
    return (drivers.slice(2));
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(){
        return fare * fare;
    }
}
const fareDoubler = (fare) => fare *2;
const fareTripler = (fare) => fare *3;

function selectDifferentDrivers (drivers, returnDrivers){
    return (returnDrivers(drivers));
}
console.log (selectDifferentDrivers(returnFirstTwoDrivers));