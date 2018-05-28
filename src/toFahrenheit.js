
function toFahrenheit(degree) {
		var typeInput = typeof(degree);
		switch(typeInput) {
			    case "number":
							var fahr = degree * 9 / 5 + 32;
							return fahr;
			        break;
			    default:
			        console.log("Input is not number");
							return false;
		}
		var fahr = degree * 9 / 5 + 32;
		return fahr;
}

export {toFahrenheit};


//
