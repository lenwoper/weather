
	// forcasting function 
    const Forcasting=()=>{
        var Tar=document.getElementById("forcasting");
        var name = document.getElementById("name_value").value;
        var inner_ch=document.getElementById("this_inner");
        if(name===""){
            alert("first search your location ");

        }
        else{
            if(Tar.style.display==="none"){
            Tar.style.display="block";
            inner_ch.innerHTML="HIDE";
        }
        else{
            Tar.style.display="none";
            inner_ch.innerHTML="FORCAST";
            
        }
        }
        
    }

    
   
//    all 
    
    function weather() {
	
			//  variale
			var Datea1, moonphase1, sunrise1, sunset1, maxtempF1, maxtempC1, maxWindSpeed1, daily_chance_of_rain1, condition1, Datea2, moonphase2, sunrise2, sunset2, maxtempF2, maxtempC2, maxWindSpeed2, daily_chance_of_rain2, condition2, Datea3, moonphase3, sunrise3, sunset3, maxtempF3, maxtempC3, maxWindSpeed3, daily_chance_of_rain3, condition3;
			// 
			var name = document.getElementById("name_value").value;

			if (!window.navigator.onLine) {

				alert(" Your are offline Please try again after internet connection ");
			}
			if (name === "") {
				alert(" You did not fill ");

			}
			else {
				//  what ever we 'll enter first charecter 'll in Uppercase 
				var ToFirstUpper = name.charAt(0).toUpperCase() + name.slice(1);

				fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + name + '&days=4', {
					"method": "GET",
					"headers": {
						"x-rapidapi-key": "ca28d167d3msh3207a7f510621f0p1669edjsndf30a4d4a7c9",
						"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
					}
				})

					.then(response =>{
						if(response.status===102){
							console.log("loading");
						}else{
						 return  response.json()
						
					}})
					.then(data => {

						document.getElementById('current_weathure').style.display='	block';


						// first days prdiction //
						console.log(data);

						var name_c = data["location"]["name"];
						var region_c = data["location"]["region"];
						var location_c = data["location"]["localtime"];
						var text_c = data["current"]["condition"]["text"];

						var temp_c = data["current"]["temp_c"];
						var temp_f = data["current"]["temp_f"];
						var humidity_c = data["current"]["humidity"];
						var last_updated_c = data["current"]["last_updated"];
						var date_c = data["current"]["wind_kph"];


						document.getElementById("current_weathure").innerHTML = "	<h4 >Current Weather</h4>" +"<br>Location: " + name_c + " <br>Region  :" + region_c + "<br> LocalTime  :" + location_c + "<br>  Condition  :" + text_c + "<br>  Celsius  :" + temp_c +
							"<br> Temprature In Fahrenhiet  :" + temp_f + "<br> Humidity  :" + humidity_c + "<br> Updated  :" + last_updated_c + "<br>  Wind speed  :" + date_c + " km/hour";





						//  weathure for casting 

						// Datea1 = data["forecast"]["forecastday"][0]["date"];
						// moonphase1 = data["forecast"]["forecastday"][0]["astro"]["moon_phase"];
						// sunset1 = data["forecast"]["forecastday"][0]["astro"]["sunrise"];

						// sunrise1 = data["forecast"]["forecastday"][0]["astro"]["sunset"];
						// maxtempF1 = data["forecast"]["forecastday"][0]["day"]["maxtemp_f"];
						// maxtempC1 = data["forecast"]["forecastday"][0]["day"]["maxtemp_c"];
						// maxWindSpeed1 = data["forecast"]["forecastday"][0]["day"]["maxwind_kph"];
						// daily_chance_of_rain1 = data["forecast"]["forecastday"][0]["day"]["daily_chance_of_rain"];
						// condition1 = data["forecast"]["forecastday"][0]["day"]["condition"]["text"];
console.log(data);

						Datea2 = data["forecast"]["forecastday"][1]["date"];
						moonphase2 = data["forecast"]["forecastday"][1]["astro"]["moon_phase"];
						sunset2 = data["forecast"]["forecastday"][1]["astro"]["sunrise"];

						sunrise2 = data["forecast"]["forecastday"][1]["astro"]["sunset"];
						maxtempF2 = data["forecast"]["forecastday"][1]["day"]["maxtemp_f"];
						maxtempC2 = data["forecast"]["forecastday"][1]["day"]["maxtemp_c"];
						maxWindSpeed2 = data["forecast"]["forecastday"][1]["day"]["maxwind_kph"];
						daily_chance_of_rain2 = data["forecast"]["forecastday"][1]["day"]["daily_chance_of_rain"];
						condition2 = data["forecast"]["forecastday"][1]["day"]["condition"]["text"];
					
						Datea3 = data["forecast"]["forecastday"][2]["date"];
						moonphase3 = data["forecast"]["forecastday"][2]["astro"]["moon_phase"];
						sunset3 = data["forecast"]["forecastday"][2]["astro"]["sunrise"];



						sunrise3 = data["forecast"]["forecastday"][2]["astro"]["sunset"];
						maxtempF3 = data["forecast"]["forecastday"][2]["day"]["maxtemp_f"];
						maxtempC3 = data["forecast"]["forecastday"][2]["day"]["maxtemp_c"];
						maxWindSpeed3 = data["forecast"]["forecastday"][2]["day"]["maxwind_kph"];
						daily_chance_of_rain3 = data["forecast"]["forecastday"][2]["day"]["daily_chance_of_rain"];
						condition3 = data["forecast"]["forecastday"][2]["day"]["condition"]["text"];


						document.getElementById("forcasting").innerHTML = "<h4>Next two days Forcasted  </h4> <br>"+
							" Date : " + Datea2 + "<br>  Moonphase : " + moonphase2 + "<br>  Sunset : " + sunrise2 + "<br>  Sunrise : " + sunrise2 + "<br>  Fahrenheit :" + maxtempF2 + "<br> Celsius : " + maxtempC2 + "<br> Wind speed :" + maxWindSpeed2 + " km " + "<br> Chance of Rain :" + daily_chance_of_rain2 +"%"+ "<br> Condition :" + condition2 +
							"<br><br>  Date : " + Datea3 + "<br>  Moonphase : " + moonphase3 + "<br>  Sunset : " + sunrise3 + "<br>  Sunrise : " + sunrise3 + "<br>  Fahrenheit :" + maxtempF3 + "<br> Celsius : " + maxtempC3 + "<br> Wind speed :" + maxWindSpeed3 + " km " + "<br> Chance of Rain :" + daily_chance_of_rain3 + "%"+ "<br> Condition :" + condition3;





					})
					.catch(err => {
						document.getElementById("current_weathure").innerHTML="Not match your entered loaction";
						document.getElementById("forcasting").innerHTML = "Not match your entered loaction";
					})
			}






		}



