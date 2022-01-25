const promise = fetch("https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no");

promise
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("city").innerHTML = data.location.name;
        document.getElementById("country").innerHTML = data.location.country;
        document.getElementById("date").innerHTML = data.location.localtime;
        document.getElementById("condition").innerHTML = data.current.condition.text;
        let image = data.current.condition.icon;
        document.getElementById("icon").innerHTML = `<img src="http://${image}">`;
        document.getElementById("temp").innerHTML = data.current.temp_c;
        document.getElementById("feelslike").innerHTML = data.current.feelslike_c;
        document.getElementById("humidity").innerHTML = data.current.humidity;
    });