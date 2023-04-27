let latitude = 0
let longitude = 0

window.onload = function() {
    const date = new Date()
    const dateString = (date.getMonth()+1) + '/' + date.getDate() +
     '/' +date.getFullYear();
     document.getElementById('date').innerHTML = dateString
}    
