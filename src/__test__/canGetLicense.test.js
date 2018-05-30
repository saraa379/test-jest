import {canGetLicense} from '../canGetLicense.js';

describe('canGetLicense test suite', () => {
		test('red test', () => {
				let license = 'A';
				let age = 20;
				let actual = canGetLicense(license, age);
				let expected = "A";
				expect(actual).toBe(expected);
		});

			test('throws if parameters are not valid', () => {
			expect(() => canGetLicense({})).toThrow();
		})
})


//
