let latitude = 0
let longitude = 0

window.onload = function() {
    const date = new Date()
    const dateString = (date.getMonth()+1) + '/' + date.getDate() +
     '/' +date.getFullYear();
     document.getElementById('date').innerHTML = dateString
}    
if ("geolocation" in navigator) { //if broswer supports location
    navigator.geolocation.getCurrentPosition(success) //

} else {//if location is denied or not exist
  console.log("Geolocation is not available in your browser.");
}
function success(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
    console.log(latitude.longitude)
    //print out the latitude and longitude to see if it was right
}