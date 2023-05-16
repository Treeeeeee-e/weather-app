const express = require('express');
const request = require("request");

const app = express();

const cors = require('cors')
app.use (cors())

const API_KEY = `e3f24db3752c7c6d86c1af5dcc64797c`



app.get('/weather/:latitude/:longitude', (req, res) => {
 //res.send('Hello World!');
 // console.log("welcome to the root!");
  let lon = req.params['longitude']
  let lat = req.params ['latitude']



  
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
  
  
  
	request(url, (error, response, body)=>{
		
		// Printing the error if occurred
		if(error) console.log(error)
	   
		// Printing status code
		console.log(response.statusCode);
		 
		// Printing body
		console.log(body);

        body = JSON.parse(body)
        weatherStatus = body.weather[0].main 
        res.send({"temperature": body.main.temp, "weatherStatus" : weatherStatus})
        console.log(body.main.temp)
        
	});
  
});

app.get('/5day/:latitude/:longitude', (req, res) => {
    //res.send('Hello World!');
    //console.log("welcome to the root!");
    
    let lon = req.params['longitude']
    let lat = req.params ['latitude']
  
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
  
    request(url, (error, response, body)=>{
		
        // Printing the error if occurred
        if(error) console.log(error)
       
        // Printing status code
        console.log(response.statusCode);
         
        // Printing body
        body = JSON.parse(body)
      
        //console.log(body.main.temp);
    
    let todaysDate = new Date().getDay();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let forecast = [];
        for (let i = 0; i < 5; i++){
        let tempSum = 0;
        let count = 0;
        for (let  dataPoint of body.list){ 
            const date = new Date(dataPoint.dt * 1000) 
             if (date.getDay() == todaysDate ){ 
            count++; 
            tempSum += dataPoint.main.temp;
            }       
    }
    
    const day = { "dayName": week[todaysDate], "temp": Math.round(tempSum / count) } 
    forecast.push(day);
    todaysDate = (todaysDate + 1) % 7;
    }
    console.log(forecast);
    res.send (forecast)
    
    });
});



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});



