let distanceFromHqInBlocks=function (somevalue){
    if (somevalue>42){
        return somevalue-42
    } else 
    return Math.abs(somevalue- 42);
    
}

function distanceFromHqInFeet(somevalue){
    console.log(distanceFromHqInBlocks(somevalue));
    return distanceFromHqInBlocks(somevalue) +264;
}


let feet=distanceFromHqInBlocks()*264;
function distanceTravelledinfeet(number){
    return feet;
}
function distanceFromHqInFeet(location=43){
    if(location>42){
        let feet = ((distanceFromHqInBlocks(location))*264);
        return feet
}else{
    let feet =((start-destination)*264)
    return feet
}

}
    distanceTravelledinfeet(43,48)
    distanceTravelledinfeet(50,60)
    distanceTravelledinfeet(34,28)

    function calculateFarePrice(start, destination){
let feet =((distanceTravelledinfeet(start, destination)))
let fare=0
if(feet<=400){
    return fare
}
}{

}
 if(distance>400 && distance<=2000){
    distance=distance -400;
    fare=distance *0.02
    return fare
}
else if(distance >2000 && distance <=2499){
    let fare= 25

    return fare
}
else if (distance>=2500){
    return "cannot travel that far"
}
console.log(caluculatesFarePrice(4,11))
