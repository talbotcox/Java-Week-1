
document.getElementById("resultDiv").innerHTML = phonenumber();

function phonenumber(loop) {
  var numcheck = false
	
	while(!numcheck) {
		  var phoneNumber = prompt("Please enter your phone number in this format XXX-XXX-XXXX")
	numcheck = isnumber(phoneNumber.split("-").join(''))
	}
	return "Is this your number " + phoneNumber
}


//phonenumber()


function birthday(loop) {
  var bcheck = false
	
	while(!bcheck) {
		  var birth = prompt("Please enter your Birthday in this format MM/DD/YYYY")
		bcheck = isnumber(birth.split("/").join(''))
			if (birth[0]+birth[1] > 13 || birth[0]+birth[1] <= 0 ){
			bcheck = false
			} 	else if (birth[3]+birth[4] > 31 || birth[3]+birth[4] <= 0 ){
				bcheck = false
				}	else if (birth[6]+birth[7]+birth[8]+birth[9] > 2016 || birth[6]+birth[7]+birth[8]+birth[9] <= 1901 ){
					bcheck = false
					}
	
	}
	
}

//birthday()



//postal code
function postalCode(loop) {
  var pcheck = false
	
	while(!pcheck) {
		  var zip = prompt("Please enter your Zip Code in this format xxxxx OR xxxxx-xxxx")
		pcheck = isnumber(zip.split("-").join(''))
			if (zip.length > 10 || zip.length <= 4 ){
			pcheck = false
			}
	}

}

//postalCode()


//state abbreviation 
function state(loop) {
  var scheck = false
	
	while(!scheck) {
		  var birth = prompt("Please enter your state abbreviation. Must be two characters")
	scheck = isState(birth.split(" ").join('').toUpperCase())
	}
	
	
	
}

//state()


//Married
function married(loop) {
  var mcheck = false
	
	while(!mcheck) {
		  var m = prompt("Are you Married? Yes or No")
	mcheck = areu(m.split(" ").join('').toUpperCase())
	}
	
	
	
}

//married()





// Is a number Function for Phone, Birthday, Postal Code
function isnumber(n){
		return !isNaN(parseFloat(n)) && isFinite(n)
	}
	
// State Checker
function isState(x){
	var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
	if (states.indexOf(x) === -1){
		return false
	} else {
		return true
	}
	
}

// Marrige Checker
function areu(x){
	if(x === "YES" || x === "NO"){
		return true
	} else {
		return false
	}
}