let url = "https://restcountries.com/v3.1/all"
fetch(url)
.then((response)=>response.json())
.then((data)=>data.forEach(data1 => {
var cardDiv = document.querySelector("#cardDiv")

cardDiv.innerHTML +=` 
                        <div class="row">
                        <div class="col-md-3 col-lg-4 col-sm-12">
                           <div class="card">
                                <div class="inner">
                                        <div class="card-header">
                                                <h1 id="title" class="text-center">${data1.name.common}</h1>
                                                <img src="${data1.flags.png}" class="card-img-top" alt="...">
                                        </div>
                                </div>
                                 <div class="card-body">
                                        <h6 class="card-text">${data1.capital}</h6>
                                        <h6 class="card-text">${data1.region}</h6>
                                        <h6 class="card-text">${(data1.fifa!=undefined)?data1.fifa:data1.cca3}</h6>
                                        <button class="btn btn-primary" onclick="getWeather([${data1.latlng[0]},${data1.latlng[1]}],'${data1.name.common}')">Click for weather</button> 
                                        <p id="load${data1.name.common}"></p>
                                </div>
                          </div>
                     </div>
                   </div> `             ;
      return cardDiv                  
       
}))


 let  getWeather=(lan,name)=>{
        let [lat,lon]=lan
        let l=document.getElementById(`load${name}`)
        l.innerHTML="...Loading...please wait...";
        //fetching weather api
        let url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6cbef5d4da1f6c145ad613e710e65ee4`
        console.log(url1)
        fetch(url1).then((res)=>res.json()).then((data)=>{
            
            
            //weather msg template
            let weatherMsg=`
            Countrty : ${data.name}
            latitude :  ${lat}   longitude :${lon}
            Weather  :  ${data.weather[0].description}
            Wind speed : ${data.wind.speed}
            temperature : ${data.main.temp} 
            `;
            
            //we are going to show weather report via alert.
            alert(weatherMsg);
            l.innerHTML="";
        })}
