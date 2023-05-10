const express = require('express');
const request = require("request");

const app = express();


const API_KEY = `e3f24db3752c7c6d86c1af5dcc64797c`



app.get('/weather/:lat/:lon', (req, res) => {
  res.send('Hello World!');
  console.log("welcome to the root!");
  let lon = req.params['lon']
  let lat = req.params ['lat']



  
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
  
let body=JSON.parse(body)
  
  
	request(url, (error, response, body)=>{
		
		// Printing the error if occurred
		if(error) console.log(error)
	   
		// Printing status code
		console.log(response.statusCode);
		 
		// Printing body
		console.log(body);
	});
  
  
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
