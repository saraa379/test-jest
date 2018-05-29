
function toFahrenheit(degree) {
		var typeInput = typeof(degree);
		switch(typeInput) {
			    case "number":
							var answer = convert(degree);
							return answer;
			        break;
			    default:
			        console.log("Input is not number");
							return false;
		}//end of switch
}//end of toFahrenheit

export {toFahrenheit};


function convert(number){
	if(number < -273.15){
		 return NaN;
	} else {
		var answer = number * 9 / 5 + 32;
		return answer;
	}

}

//
