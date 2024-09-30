const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_real = document.getElementById("temp_real")
const temp_status = document.getElementById("temp_status")
const datahide = document.querySelector(".middle_layer")
const getinfo = async(event)=>{
    event.preventDefault();
    
    let cityval = cityname.value;
    if(cityval===""){
city_name.innerText = `plz enter the city name before enter`
datahide.classList.add("data_hide")
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=matric&appid=61218b7e8ecb428aebbc0e5c09245627`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(data)
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;

            // real code but problem is k ye kelvvin main output dy rha tha 
            // temp_real.innerText = arrdata[0].main.temp;

            //kelvin to celsius convert code
            const celsius = arrdata[0].main.temp-273.15;
            let text = celsius.toString();
            if(text<10){

                var part = +text.slice(0,4);
            }
            else{
                var part = +text.slice(0,5);

            }
            temp_real.innerText = part;

            // dimag khapa 
            // for (let i = 0; i < 4; i++) {
            //     let finnalTemp = +(text[i]);
            //     temp_real.innerText = (finnalTemp);
            //   }
 
         


            const tempMood = arrdata[0].weather[0].main;
            if(tempMood==="Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun'style='color:#eccc68'></i>";
            }
            else if(tempMood==="Fog"){
                temp_status.innerHTML = "<i class='fa-solid fa-smog' style='color:#f1f2f8'></i>";
                
            }
            else if(tempMood==="Smoke"){
                temp_status.innerHTML = "<i class='fa-solid fa-smog' style='color:#f1f2f8'></i>";
                
            }
            else if(tempMood==="Mist"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud'style='color:#f1f2f8'></i>";
                
            }
            else if(tempMood==="Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud'style='color:#f1f2f8'></i>";
                
            }
            
            else if(tempMood==="Rain"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color:#a4b0be'></i>";
                
            }
            else{
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' ></i>";
            }
            datahide.classList.remove("data_hide")
        } catch (error) {
            city_name.innerText = `plz enter the city name proper`
            datahide.classList.add("data_hide")
        }
    }
}
submitBtn.addEventListener("click", getinfo)

const getCurrentDay = () => {
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentTime = new Date();
    let days = weekDay[currentTime.getDay()];
    const day = document.getElementById("day");
    day.innerText = days;
}

const getCurrentDate = () => {
    const now = new Date();
    const options = { day: 'numeric', month: 'short' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const dateElement = document.getElementById("today_date");
    dateElement.innerText = formattedDate.toUpperCase(); // Convert to uppercase
}

getCurrentDay();
getCurrentDate();
