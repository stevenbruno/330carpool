function scheduleRide() {
	window.alert("One-way ride scheduled!");
 }
 //For future prototypes this will need to add the ride to "Scheduled Rides", but we don't need to for P5

 function scheduleReturnRide() {
	window.alert("Round-trip ride scheduled!");
 }

 function showForm() {
 	document.getElementById("one-way").style.display = 'none';
 	document.getElementById("return-form").style.display = "block";

 }