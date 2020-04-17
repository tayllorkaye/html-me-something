
   window.addEventListener("load", function() {
      let form = document.querySelector("form");

      let getMissionPlanet=document.getElementById("missionTarget");
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      //access the JSON in the response
      response.json().then(function(json){
         const getMissionPlanet=document.getElementById("missionTarget");
         getMissionPlanet.innerHTML=
         `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
            </ol>
            <img src="${json[2].image}"></img>
         `;   
      })
   });

      form.addEventListener("submit", function() {

               let pilotName = document.querySelector("input[name=pilotName]");
               let copilotName = document.querySelector("input[name=copilotName]");
               let cargoMass = document.querySelector("input[name=cargoMass]");
               let fuelLevel = document.querySelector("input[name=fuelLevel]");
               let getFaultyItems = document.getElementById("faultyItems");
               let fuelStatus = document.getElementById("fuelStatus");
               let launchStatus = document.getElementById("launchStatus");
               let cargoStatus = document.getElementById("cargoStatus")

               if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
                  alert("All fields are required!");
                  event.preventDefault();
               }

               if(isNaN(fuelLevel.value)){
                  alert("Fuel Level must be a number.");
                  event.preventDefault();
               }

               if(isNaN(cargoMass.value)){
                  alert("Cargo Mass must be a number.");
                  event.preventDefault();
               }
            
               
               if(fuelLevel.value < 10000){ //less than
               getFaultyItems.style.visibility = "visible";
               fuelStatus.innerHTML = "Fuel Level too Low. Shuttle not ready for launch";
               launchStatus.innerHTML = "Shuttle not ready for launch"
               launchStatus.style.color = "red";
               event.preventDefault();
               
               }

               if(cargoMass.value > 10000){ //greater than
               getFaultyItems.style.visibility = "visible";
               cargoStatus.innerHTML = "Cargo Mass is too large. Shuttle not ready for launch";
               cargoStatus.innerHTML = "Shuttle not ready for launch"
               launchStatus.style.color = "red";
               event.preventDefault();

               }

               if(fuelLevel.value > 10000 && cargoMass.value < 10000){
                  getFaultyItems.style.visibility = "visible";
                  launchStatus.innerHTML = "Shuttle ready for launch!";
                  launchStatus.style.color = "green";
                  event.preventDefault();
                 }
  
      });
   });          
              









/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: </li>
   <li>Diameter:${}</li>
   <li>Star:${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


// <script>
// window.addEventListener("load",function(){
//     fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
//         response.json().then( function(response) {
//             const div = document.getElementById("missionTarget");


//             div.innerHTML = 
//             <h2>Mission Destination</h2>
//            <ol>
//               <li>1.Name:"K2-18b" </li>
//               <li>2.Diameter:${json.diameter}</li>
//               <li>3.Star:${json.star}</li>
//               <li>4.Distance from Earth: ${json.distance}</li>
//               <li>5.Number of Moons: ${moon}</li>
//            </ol>
//              <img src="${image}"> 
//              `;
//         });
//     });
// });

// </script>







