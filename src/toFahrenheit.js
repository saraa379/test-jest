
function toFahrenheit(degree) {
		var typeInput = typeof(degree);
		switch(typeInput) {
			    case "number":
							var answer = convert(degree);
							return answer;
			        break;
					case "string":
							var converted = parseFloat(degree);
							let booleanValue = isNaN(converted);
							if(booleanValue){
									return NaN;
							} else {
								var answer = convert(converted);
								return answer;
							}
							var answer = convert(degree);
							return answer;
					    break;
			    default:
			        console.log("Input is not number");
							return NaN;
		}//end of switch
}//end of toFahrenheit

export {toFahrenheit};


function convert(number){
	if(number < -273.15){
		 return NaN;
	} else if(number > 5500000000000){
			return NaN;
	} else {
		var answer = number * 9 / 5 + 32;
		return answer;
	}//end of if else

}//end of convert

//
