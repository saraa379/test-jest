
function canGetLicense(license, age) {
	var typeAge = typeof(age);
	if(typeAge !== "number") {
			throw new Error('Invalid age type');
			console.log("Age is invalid");
	} else if (age < 0 || age > 120){
			throw new Error('Invalid age boundary');
			console.log("Age is invalid");
	} else {
			switch(license) {
						case "A":
						case "D":
								if(age >= 24){
										return true;
								} else {
										return false;
								}
								break;
						case "B":
						case "BE":
								if(age >= 18){
										return true;
								} else {
										return false;
								}
								break;
						case "C":
								if(age >= 21){
										return true;
								} else {
										return false;
								}
								break;
						default:
								throw new Error('Invalid license');
								console.log("License is invalid");
			}//end of switch
		}//end if else

}//end of canGetLicense

export {canGetLicense};


//
