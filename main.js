//TRYING THIS USING THE FETCH METHOD
//fetch takes in one required parameter which is the url
//you can also pass in an init options object as the second argument
//promise will not reject/or return on a fetch which is one of the benefits even if the response is 404 or 500.
//the response will be an empty response
function getData() {
    let cityname = document.querySelector("#cityname").value;
    let zipcode = document.querySelector("#zipcode").value;
    console.log(cityname, zipcode)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname},${zipcode}&appid=86640f6ca230f0a1f80485532a1d8763`)
    .then(response => response.json())
    .then(weatherdata => {
        console.log(weatherdata)
        //City
        let name = weatherdata['name'];
        console.log(name)
        document.querySelector(`#card-text-0`).innerHTML=name
       //High
        let temp_max = weatherdata['main']['temp_max'];
        console.log(temp_max)
        document.querySelector(`#card-text-1`).innerHTML=temp_max
       //Low
       let temp_min = weatherdata['main']['temp_min'] 
       console.log(temp_min)
       document.querySelector(`#card-text-2`).innerHTML=temp_min
       let forecast = weatherdata['weather'][0]['main'];
       console.log(forecast)
       document.querySelector(`#card-text-3`).innerHTML=forecast
       //Humidity 
       let humidity = weatherdata['main']['humidity'];
       console.log(humidity)
       document.querySelector(`#card-text-4`).innerHTML=humidity
    })
    //function starts here
    
}

// function backgroundChange(forecast) {
//     if (forecast === 'Rain') {
//     document.body.style.backgroundImage = "url('https://sukhbinder.files.wordpress.com/2012/10/wpid-rain.jpg')";
//     } else if (forecast === 'Clouds') {
//     document.body.style.backgroundImage = "url(cloud.gif)";
//     } else if (forecast === 'Clear') {
//     document.body.style.backgroundImage = "url('https://i...')";
//     }else if (forecast === 'Haze') {
//       document.body.style.backgroundImage = "url('https://live.staticflickr.com/7192/6814624698_2a45c14996_n.jpg')";
//     } else {
//     document.body.style.backgroundImage= "url(background.gif)";
//     }
//   }

//1.)first create this fetch then stick inside of the function up top.need to actually use a real search here and not generic endpoint to test
// fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago,60643&appid=86640f6ca230f0a1f80485532a1d8763')
//   .then(response => response.json())
//   .then(weatherdata => {console.log(weatherdata)
//   })
//2.) go into internet explorer file and refresh your page from live server.
//write getData() to see what we are getting back
//3.) now we need to provide a form on our website so the user can actually search for our data/api info. 
//create a form in your html for this and create the sections in the form and the buttons.make sure to include
//onClick = getData() which is calling our function
//4.) Now we need to think about how we want to show our data? Do we need rows or what? put it in our index.html file 
//5.)Next we need to address that the click is going to return data even if its not the data we requested.
//to address this we need to grab our values in our forms for the submit buttons and assign them to variables in the function(example let ...)
//6.)add backticks to your fetch url so we can use the let variables.put them in your url in the proper spots
//7.)doublecheck in your browser that this info is coming back different for each user inquiry.
//8.)now its time to put the data into our html may have to make a for loop or function to extract data from data results of the api