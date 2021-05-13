/* LAB 8 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge)

var contest = {
	flavour: "",
	name: "",
	email: "",
	phone: 0
};


jQuery(document).ready(function () {   



var Contestform = document.forms.form;
console.log(Contestform);

var phonenumber = /^\d{10}$/;

Contestform.onsubmit = processForm;

function processForm(){

	//Assigning object property values from form submission
	contest.flavour = Contestform.input_flavour.value;
	contest.name = Contestform.input_name.value;
	contest.phone = Contestform.input_phone.value;	
	contest.email = Contestform.input_email.value;


//Validating form input name field
		if(contest.flavour === "" || contest.flavour === null){ 
		flavour = document.getElementById("input_flavour");
		flavourlabel  = document.getElementById("flavourerror");
		flavourlabel.innerHTML = "Please Select Your Favourite Flavour";	
		flavourlabel.style.color = "red";			
		return false;
	}

//Validating form input name field
		if(contest.name === "" || contest.name === null){ 
		namefield = document.getElementById("input_name");
		namelabel  = document.getElementById("nameerror");
		namelabel.innerHTML = "Please Enter Name";	
		namelabel.style.color = "red";	
		namefield.focus(); 
		return false;
	}



//Validating form input phone number field
	if(!phonenumber.test(contest.phone) ){ 	
		phonefield = document.getElementById("input_phone");
		phonelabel  = document.getElementById("phoneerror");
		phonelabel.innerHTML = "Please Enter Correct Phone Number";	
		phonelabel.style.color = "red";	
		phonefield.focus(); 
		return false;
	}



//Updating the Thank you message	
	document.getElementById("formarea").style.display = "none";
	document.getElementById("subheading").style.display = "none";
	document.getElementById("confirmation").style.display = "block";
	thankyouCustomer.innerHTML = " " + contest.name + " ";
	var tokennumber = Math.floor((Math.random() * (999 - 851)) + 851 );
	token.innerHTML = tokennumber;
return false;

}
function Tryone() {
	var result1 = Math.floor((Math.random() * (850 - 101)) + 101 );
	document.getElementById('result1').innerHTML = result1;
	$("#play1").attr("disabled", true);
}

function Trytwo() {
	var result2 = Math.floor((Math.random() * (850 - 101)) + 101 );
	document.getElementById('result2').innerHTML = result2;
	$("#play2").attr("disabled", true);
}

function Trythree() {
	var result3 = Math.floor((Math.random() * (850 - 101)) + 101 );
	document.getElementById('result3').innerHTML = result3;
	$("#play3").attr("disabled", true);
}

document.getElementById("play1").onclick = Tryone;
document.getElementById("play2").onclick = Trytwo;
document.getElementById("play3").onclick = Trythree;

var click1;
var click2;
var click3;
document.getElementById('play1').addEventListener("click", check1);
document.getElementById('play2').addEventListener("click", check2);
document.getElementById('play3').addEventListener("click", check3);

function check1(){ 
    click1 = "done";
console.log("try 1 done");
}
function check2(){ 
    click2 = "done";
console.log("try 2 done");
}
function check3(){ 
    click3 = "done";
console.log("try 3 done");

if (click1=="done" && click2=="done" && click3=="done") {

document.getElementById("finalmessage").style.display = "block";
}
  }  

 });