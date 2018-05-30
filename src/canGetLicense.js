
function canGetLicense(license, age) {
	switch(license) {
				case "A":
						return license;
						break;
				case "B":
				case "BE":
						return license;
						break;
				case "C":
						return license;
						break;
				case "D":
						return license;
						break;
				default:
						throw new Error('Invalid license');
						return false;
	}//end of switch

}//end of canGetLicense

export {canGetLicense};


//
