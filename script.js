// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
    	window.addEventListener("load", function(){
    		fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
               	const div = document.getElementById("missionTarget");
               	div.innerHTML = `
               	<h2>Mission Destination</h2>
				<ol>
   					<li>Name: ${json[0].name}</li>
   					<li>Diameter: ${json[0].diameter}</li>
   					<li>Star: ${json[0].star}</li>
   					<li>Distance from Earth: ${json[0].distance}</li>
   					<li>Number of Moons: ${json[0].moons}</li>
				</ol>
				<img src="${json[0].image}">
               	`;
               })
           })
    		let form = document.querySelector("form");
            form.addEventListener("submit", function(event){
            	event.preventDefault();
            	let pilotStatus = document.querySelector("input[name=pilotName]")
            	let copilotStatus = document.querySelector("input[name=copilotName]")
            	let fuelStatus = document.querySelector("input[name=fuelLevel]")
            	let cargoStatus = document.querySelector("input[name=cargoMass]")
            	if(pilotStatus.value === "" || copilotStatus.value === "" || fuelStatus.value === "" || cargoStatus.value === "" ){
            		alert("All fields are required!");
            	}
            	else if(!isNaN(pilotStatus.value) || !isNaN(copilotStatus.value) || isNaN(fuelStatus.value) || isNaN(cargoStatus.value)){
            		alert("Make sure to enter valid information for each field!");
            	}
            	else{
            		document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotStatus.value} is ready.`;
            		document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotStatus.value} is ready.`;
            		document.getElementById("faultyItems").style.visibility = "visible";
            		if(fuelStatus.value < 10000){
            			document.getElementById("fuelStatus").innerHTML = "Fuel level is too low to launch.";
            			document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch.";
            			document.getElementById("launchStatus").style.color = "red";
            		} else {
            			document.getElementById("fuelStatus").innerHTML = "Fuel level is high enough to launch.";
            		}
            		if(cargoStatus.value > 10000){
            			document.getElementById("cargoStatus").innerHTML = "Cargo is too large to launch.";
            			document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch.";
            			document.getElementById("launchStatus").style.color = "red";
            		} else {
            			document.getElementById("cargoStatus").innerHTML = "Cargo is light enough to launch.";
            		}

            		if(fuelStatus.value >= 10000 && cargoStatus.value <= 10000){
            			document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
            			document.getElementById("launchStatus").style.color = "green";
            			} 
            		}
            });
        });