const promise = fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no");

let list = [];

promise
    .then((response) => response.json())    
    .then((data) => {
        // list = data;  
        console.log(data);
        document.getElementById("conteiner").innerHTML = data.current;
        // list.forEach(function (element) {
        //     console.log(element);        
        //     document.getElementById("conteiner").innerHTML
        // });       
    });
    
    
    
    
// const promise = fetch("https://rickandmortyapi.com/api/character");

// let characterList = [];

// promise
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     characterList = data.results;
//     characterList.forEach(function (element) {
//         document.getElementById("conteiner").insertAdjacentHTML(
//           "beforeend",
//           `
//             <tr>
//             <td>${element.name}</td>
//             <td>  
//               <div>${element.species}</div>
//               <div>${element.status}</div>
//             </td>
//             <td>
//               <div>${element.gender}</div>
//               <div>${element.type}</div>
//             </td>
//             </tr>
//             `
//         );
//       });    
//   });