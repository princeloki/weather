weather = () =>{
    const weatherUrl =  "http://api.weatherapi.com/v1";
    // const API_KEY = getKey();
    const current = "/current.json?";
    const forecast = "/forecast.json?";
    const autoComp = "/search.json?";
    
    const search = document.querySelector(".search");
    const input = document.querySelector("#search");
    const time = document.querySelector(".time");
    const loc = document.querySelector(".loc");
    const temp = document.querySelector(".temp");
    const icon = document.querySelector(".wIcon");
    const body = document.querySelector(".container");
    const forc = document.querySelector(".forc");
    const info = document.querySelector(".information");
    const nav = document.querySelector("#nav");
    const results = document.querySelector('.results');
    let days = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"}
    const geoLocation = "Tokyo";

    // getKey = () =>{
    //     fetch("")
    // }

    //Date script
    run = (location) =>{
        checkWeather=(weather, time) =>{
            if(weather.includes("cloudy")){
                if(time>=6 && time<=18){
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cloudy"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>'
                    body.style.background = 'url(../img/cloudy.jpg) no-repeat';
                    body.style.backgroundSize = "cover";
                    body.style.backgroundPosition = "center";
                } else{
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cloudy"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>'
                    body.style.background = 'url(../img/cloudy-night.jpg) no-repeat';
                    body.style.backgroundSize = "cover";
                    body.style.backgroundPosition = "center";
                }
            } else if(weather.includes("rain")){
                if(time>=6 && time<=18){
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>'
                    body.style.background = 'url(../img/rainy.jpg) no-repeat';
                    body.style.backgroundSize = "cover";
                    body.style.backgroundPosition = "center";
                } else{
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>'
                    body.style.background = 'url(../img/rainy-night.jpg) no-repeat';
                    body.style.backgroundSize = "cover";
                    body.style.backgroundPosition = "center";
                }
            } else if(weather.includes("Sunny")){
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
                body.style.background = 'url(../img/sunny.jpg) no-repeat';
                body.style.backgroundSize = "cover";
                body.style.backgroundPosition = "center";
            } else if(weather.includes("snow")){
                if(time>=6 && time<=18){
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>'
                    body.style.background = 'url(../img/snowy.jpg) no-repeat';
                    body.style.backgroundSize = "cover";
                    body.style.backgroundPosition = "center";
                } else{
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>'
                    body.style.background = 'url(../img/snowy-night.jpg) no-repeat';
                    body.style.backgroundSize = "cover";
                    body.style.backgroundPosition = "center";
                }
            } else if(weather.includes('Clear')){
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
                body.style.background = 'url(../img/clear-night.jpg) no-repeat';
                body.style.backgroundSize = "cover";
                body.style.backgroundPosition = "center";
            }
        }
    
        foreCast=(data)=>{
            data.forEach(forD=>{
                let d = forD.date;
                let date = new Date(d);
                // let yearMonthDay = date.toLocaleDateString();
                let yearMonthDay = days[date.getDay()];
                let type = forD.day.condition.text;
                let container = document.createElement("div");
                container.classList.add("forBox");
                let dat = document.createElement("h2");
                let condition = document.createElement("h3");
                let i = document.createElement("svg");
                if(type.includes("snow")){
                    dat.innerText = yearMonthDay;
                    condition.innerText = type;
                    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>'
                    container.appendChild(dat);
                    container.appendChild(i);
                    container.appendChild(condition);
                    forc.appendChild(container);
                } else if(type.includes("rain")){
                    dat.innerText = yearMonthDay;
                    condition.innerText = type;
                    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>'
                    container.appendChild(dat);
                    container.appendChild(i);
                    container.appendChild(condition);
                    forc.appendChild(container);
                } else if(type.includes("cloud")){
                    dat.innerText = yearMonthDay;
                    condition.innerText = type;
                    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cloudy"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>'
                    container.appendChild(dat);
                    container.appendChild(i);
                    container.appendChild(condition);
                    forc.appendChild(container);
                } else if(type.includes("Sunny")){
                    dat.innerText = yearMonthDay;
                    condition.innerText = type;
                    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
                    container.appendChild(dat);
                    container.appendChild(i);
                    container.appendChild(condition);
                    forc.appendChild(container);
                }
            })
        }
    
        async function currentWeather(location){
            try{
                const response = await fetch("current", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({loc: location})
                })
                    .then(data => {
                        return data.json();
                    })
                    .then(weather =>{
                        const curWeather = weather.current.condition.text;
                        const date = new Date(weather.current.last_updated);
                        reset=()=>{
                            temp.innerHTML = "";
                            loc.innerText = "";
                            icon.innerHTML = "";
                            time.innerText = "";
                        }
                        next=()=>{
                            temp.innerHTML = weather.current.temp_c+"<span>&#176;</span>";
                            loc.innerText = weather.location.name + ", "+ weather.location.region;
                            const yearMonthDay = date.toLocaleDateString();
                            const tme = date.toLocaleTimeString();
                            time.innerText = yearMonthDay + ", "+ tme;
                            info.classList.remove("invisible2");
                        }
            
                        if(info.classList.contains("invisible2")){
                            setTimeout(reset(), 900);
                            setTimeout(next(), 1000);
                            setTimeout(checkWeather(curWeather, date.getHours()), 1100);
                        } else{
                            console.log("0"); 
                            info.classList.add("invisible2");
                            setTimeout(reset(), 900);
                            setTimeout(next(), 1000);
                            setTimeout(checkWeather(curWeather, date.getHours()), 1100);
                        }
                    })
            } catch(error){
                console.log(error);
            }
        }


        async function getForecast(location){
            try{
                const response = await fetch("/forecast",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({location: location})
                })
                .then(data => {
                    return data.json();
                })
                .then(weather => {
                    forc.classList.add("invisible2");
                    setTimeout(()=>forc.replaceChildren(), 800);
                    setTimeout(()=>{                    
                        let foreData = weather.forecast.forecastday.splice(1,8);
                        if(forc.childNodes.length == "0"){
                            foreCast(foreData);
                            forc.classList.remove("invisible2");
                    }
                    }, 1000);
                })
            } catch(error){
                console.log(error);
            }
        }

        currentWeather(location);
        getForecast(location);

    }

    autocomp=(loc)=>{
        fetch(weatherUrl+autoComp+API_KEY+" &q="+loc)
        .then(data=>{
            return data.json();
        })
        .then(weather=>{
            weather.forEach(area=>{
                let h2 = document.createElement("h2");
                h2.innerText = area.name+", "+area.country;
                results.appendChild(h2);
                results.classList.remove("invisible2");
            })
            // h2.innerText = weather.
        })
    }

    run(geoLocation);
    
    search.addEventListener("click", ()=>{
        run(input.value);
    });

    input.addEventListener("input", ()=>{
        results.classList.add("invisible2");
        setTimeout(()=>{
            results.replaceChildren();
            if(input.value!=[]){
                autocomp(input.value);
            } 
        }, 300);
    });

    setInterval(()=>{
        let h2 = results.querySelectorAll("h2");
        h2.forEach(place=>{
            place.addEventListener("click", ()=>{
                run(place.innerText)});
        })
    }, 2000);
 
}

weather();

