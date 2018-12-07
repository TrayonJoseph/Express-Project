
function initMap(){
    getLocation()
}

function getLocation(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayLocation)
}else{
    alert("Can't find Location")
}

}

function displayLocation(place){
 console.log(place)
 currentPlace ={lat:place.coords.latitude, lng:place.coords.longitude}
 const map = new google.maps.Map(
     document.getElementById("map"),{ zoom: 4, center: currentPlace});
     const marker = new google.maps.Marker({position: currentPlace, map:map})
 
}

























