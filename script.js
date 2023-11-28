const input = document.querySelector(".search input")
const btn = document.querySelector(".search button")
const error = document.querySelector(".error")
async function getwether(city){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eea8aa87784daa48bd98ef3f7d20d62e&units=metrice`);
    if(res.status == 404){
        document.querySelector('.error').style.display= "block"
    }else{
        document.querySelector('.error').style.display= "none"

    }
    var data = await res.json();
    document.querySelector(".celcius").innerHTML=Math.round( data.main.temp )+ "°c";
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".humidity").innerHTML= Math.round(data.main.humidity) + "%";
    document.querySelector(".widns").innerHTML= Math.round(data.wind.speed )+ "Km/h";
}
btn.addEventListener('click',()=>{
    getwether(input.value)
})