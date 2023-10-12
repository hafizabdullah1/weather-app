// let city = 'lahore';
let key = "2f7c3807f2247376b23314d96df66d48"
let inp = document.querySelector('input')
let disp = document.getElementById('disp')
let url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=${key}&units=metric`

fetch(url).then((res) => {
    res.json().then((data => {
        console.log("data", data);
        a = data
        disp.innerHTML = `${parseInt(data.main.temp)}<sup>°</sup>`
        li1.innerText = `Weather: \n ${data.weather[0].main}`
        li2.innerText = `Humidty: \n ${data.main.humidity}`
        li3.innerText = `Temp_max | Temp_min \n ${data.main.temp_max} | ${data.main.temp_min}`
        li4.innerText = `Feels_like: \n ${data.main.feels_like}`
        document.getElementById('city').innerText = `${data.name}`

        if (data.weather[0].main == 'Smoke') {
            document.querySelector('body').style.backgroundImage = "url(./img/Smoke.jpg)"
        }
        if (data.weather[0].main == 'Clear') {
            document.querySelector('body').style.backgroundImage = "url(./img/Clear.jpg)"
        }
        if (data.weather[0].main == 'Mist') {
            document.querySelector('body').style.backgroundImage = "url(./img/Mist1.jpg)"
        }
        if (data.weather[0].main == 'Storm') {
            document.querySelector('body').style.backgroundImage = "url(./img/Storm.jpg)"
        }
        if (data.weather[0].main == 'Drizzle') {
            document.querySelector('body').style.backgroundImage = "url(./img/Drizzle.jpg)"
        }
        if (data.weather[0].main == 'Daze') {
            document.querySelector('body').style.backgroundImage = "url(./img/Daze.jpg)"
        }
        if (data.weather[0].main == 'Clouds') {
            document.querySelector('body').style.backgroundImage = "url(./img/Cloud.jpg)"
        }
        if (data.weather[0].main == 'Rain') {
            document.querySelector('body').style.backgroundImage = "url(./img/Rain2.jpg)"
        }
        if (data.weather[0].main == 'Dust') {
            document.querySelector('body').style.backgroundImage = "url(./img/Dust.jpg)"
        }
        if (data.weather[0].main == 'Fog') {
            document.querySelector('body').style.backgroundImage = "url(./img/Fog1.jpg)"
        }
        else if (stat == 'Haze') {
            document.querySelector('body').style.backgroundImage = "url(./img/haze.jpeg)"
        }
    }))
})

let stat;
let display = () => {
    city = inp.value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

    fetch(url).then((res) => {
        res.json().then((data => {
            stat = data.weather[0].main
            disp.innerHTML = `${parseInt(data.main.temp)}<sup>°</sup>`
            li1.innerText = `Weather: \n ${stat}`
            li2.innerText = `Humidty: \n ${data.main.humidity}`
            li3.innerText = `Temp_max | Temp_min \n ${data.main.temp_max} | ${data.main.temp_min}`
            li4.innerText = `Feels_like: \n ${data.main.feels_like}`
            document.getElementById('city').innerText = `${data.name}`
            document.querySelector('input').value = "";


            if (stat == 'Smoke') {
                document.querySelector('body').style.backgroundImage = "url(./img/Smoke.jpg)"
            }
            else if (stat == 'Clear') {
                document.querySelector('body').style.backgroundImage = "url(./img/Clear.jpg)"
            }
            else if (stat == 'Mist') {
                document.querySelector('body').style.backgroundImage = "url(./img/Mist1.jpg)"
            }
            else if (stat == 'Storm') {
                document.querySelector('body').style.backgroundImage = "url(./img/Storm.jpg)"
            }
            else if (stat == 'Drizzle') {
                document.querySelector('body').style.backgroundImage = "url(./img/Drizzle.jpg)"
            }
            else if (stat == 'Daze') {
                document.querySelector('body').style.backgroundImage = "url(./img/Daze.jpg)"
            }
            else if (stat == 'Clouds') {
                document.querySelector('body').style.backgroundImage = "url(./img/Cloud.jpg)"
            }
            else if (stat == 'Rain') {
                document.querySelector('body').style.backgroundImage = "url(./img/Rain2.jpg)"
            }
            else if (stat == 'Dust') {
                document.querySelector('body').style.backgroundImage = "url(./img/Dust.jpg)"
            }
            else if (stat == 'Fog') {
                document.querySelector('body').style.backgroundImage = "url(./img/Fog1.jpg)"
            }
            else if (stat == 'Haze') {
                document.querySelector('body').style.backgroundImage = "url(./img/haze.jpeg)"
            }
            else {
                document.querySelector('body').style.backgroundImage = "url(./img/Clear.jpg)"
                console.log("else");
            }
            console.log(stat);
        }))
    })
}
document.getElementById('city').innerText = `${city}`

let dte = () => {
    date.innerText = `${new Date()}`
}
setInterval(dte, 1000)
