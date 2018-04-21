// sets default arrival date to tomorrow
var tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
document.getElementById("datepicker").valueAsDate = tomorrow;


//var today = new Date()
//today.setDate(today.getDate());
//document.getElementById("datepicker").min = today;
// function scheduleRide() {
// 	window.alert("Ride scheduled!");
//  }

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datepicker").setAttribute("min", today);

 function scheduleReturnRide() {
	window.alert("Round-trip ride scheduled!");
 }

 function initialize() {
  var input1 = document.getElementById("homeaddress");
  var input2 = document.getElementById("destaddress");
  new google.maps.places.Autocomplete(input1);
  new google.maps.places.Autocomplete(input2);

  var cancelnum = 0;
}


google.maps.event.addDomListener(window, 'load', initialize);


function landing_login() {
	debugger;
	if (document.getElementById('uname').value == "sfreedman14" && document.getElementById("psw").value == "password") {
		var username = "sfreedman14";
		window.location.replace('home.html');		localStorage.setItem("username", username);

	} else if (document.getElementById('uname').value == "cokoroafor" && document.getElementById("psw").value == "shnoyes") {
		var username = "cokoroafor";
		localStorage.setItem("username", username);
		window.location.replace('home.html'); 
	} else {
		document.getElementById('incorrect').style.display = 'block';
	}
}

function load_profile() {
	debugger;
	var username = localStorage.getItem("username");
	if (username == "sfreedman14") {
		window.location.href='my_profile.html';
	} else if (username == "cokoroafor") {
		window.location.href='prof2.html';
	} else {
		window.location.replace('Profile.html');
	}
	return false; 
}

function refreshpage(){
	window.location.reload()
}
// function login() {
// 		if (document.getElementById("uname").value == "sfreedman")  
// 		{
// 			if (document.getElementById("psw").value == "password") 
// 			{
// 			sessionStorage.profile = "prof1";
// 			window.location.href = "prof1.html"; //need to fix how this works
			
// 			}
// 		}
// 		if (document.getElementById("uname").value == "cokoroafor")
// 		{
// 			if (document.getElementById("psw") == "shnoyes") {
// 				sessionStorage.profile = "prof2";
// 				window.location.href = "prof2.html";
// 			}
// 		}
// 		else { //not one of our two users
// 			document.getElementById("incorrect").style.display = "block";
// 		}
// }


// function loadProfile() {
// 	if (sessionStorage.profile == "prof1") {
// 		window.location.href = "prof1.html";
// 	}
// 	else if (sessionStorage.profile == "prof2") {
// 		window.location.href = "prof2.html";
// 	}
// 	else {window.location.href = "index.html";}
// }

function logout() {
	sessionStorage.profile = null;
	window.location.href = "index.html"
}

function editInfo() {
	
}

function loadDefaults() {
	document.getElementById("phonenum").placeholder = document.getElementById("phone").innerHTML;
	document.getElementById("homeaddress1").placeholder = document.getElementById("var1").innerHTML;
	document.getElementById("workaddress1").placeholder = document.getElementById("var2").innerHTML;

}

function updateAddress() {
	if (document.getElementById("phonenum").value) {
		document.getElementById("phone").innerHTML = document.getElementById("phonenum").value; 
	}
	if (document.getElementById("homeaddress1").value) {
		document.getElementById("var1").innerHTML = document.getElementById("homeaddress1").value;
	}
	if (document.getElementById("workaddress1").value) {
		document.getElementById("var2").innerHTML = document.getElementById("workaddress1").value;
	}

}

var ridenum;
function rideVar(x) {
	ridenum = x;
}

function cancelRide(){ 
	cancelnum = 0;
	if (ridenum == 1) {
		document.getElementById("ride1").style.display = 'none';
		cancelnum = cancelnum++;
	}
	if (ridenum == 2) {
		document.getElementById("ride2").style.display = 'none';
		cancelnum = cancelnum + 1;
	}
	if (ridenum == 3) {
		document.getElementById("ride3").style.display = 'none';
		cancelnum = cancelnum + 1;
	}
	if (document.getElementById("ride1").style.display == 'none' && document.getElementById("ride2").style.display == 'none' && document.getElementById("ride3").style.display == 'none') {
		document.getElementById("norides").style.display = "block";
	}
}

function arrowToggle(){
	if (document.getElementById("return_dropdown_arrow").innerHTML == "expand_less") {
		document.getElementById("return_dropdown_arrow").innerHTML = "expand_more";
	}
	else {
		document.getElementById("return_dropdown_arrow").innerHTML = "expand_less";
	}
}

var coll = document.getElementsByClassName("collapsible");
var i;
("#time_picker").dateTimeSelector();

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}