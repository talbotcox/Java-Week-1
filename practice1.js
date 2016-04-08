// Question 1
function tripple(arg) {
	for(var i = 0; i < 3; i++){
		console.log(arg)
	}
}
tripple("Five!")

// Question 2 
function lastLetter(sum){
	console.log(sum[sum.length-1])
}
lastLetter("island")

// Question 3
function square(sum){
	var anwser = sum*sum
	console.log(anwser)
}
square(5)

// Question 4
function negate(sum){
	var n = sum.toString()
	if(n[0] === "-"){
		x = n.split('')
		y = x.shift()
		var anwser1 = x.join('')
		console.log(anwser1)
	}
	else {
		var anwser = "-"+n
		console.log(anwser)
	}
	
}
negate(-8)

// Question 5
function toArray(arg1,arg2,arg3){
	var anwser = []
	anwser.push(arg1)
	anwser.push(arg2)
	anwser.push(arg3)
	console.log(anwser)
}

toArray(1,4,5)

//Question 6
function startsWithA(arg){
	var s = arg.split('')
	if(s[0] === "a" || s[0] === "A"){
		//return "True"
		console.log('true')
	} else {
		//return false
		console.log("false")
	}
}

startsWithA("aardvark")

//Question 7
function excite(arg){
	console.log(arg+"!!!")
}

excite("go")

// Question 8
function sun(arg){
	for(var i = 0; i < arg.length; i++){
		if(arg[i] === "s" || arg[i] === "S"){
			if(arg[i+1] === 'u') {
				if(arg[i+2] === "n") {
					//return true
					console.log('true')
				}
			}
		}
	}
	
	//return false
	console.log("false")
}

sun("asunder")

// Question 9
function tiny(arg){
	if(arg < 1 && arg > 0) {
		//return true
		console.log("true")
	} else {
		//return false
		console.log("false")
	}
}

tiny(0.3)

// Question 10
function getSeconds(arg){
	var x = arg.split(":")
	var mins = parseInt(x[0])
	var seconds = parseInt(x[1])
	var result = mins * 60 + seconds
	console.log(result)
}

getSeconds("10:25")





