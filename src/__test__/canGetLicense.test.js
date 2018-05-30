import {canGetLicense} from '../canGetLicense.js';

describe('canGetLicense test suite', () => {
		test('age higher than boundary', () => {
				let license = 'A';
				let age = 121;
				expect(() => canGetLicense({})).toThrow();
		});
		test('age less than boundary', () => {
				let license = 'A';
				let age = -1;
				expect(() => canGetLicense({})).toThrow();
		});
		test('age is not a number', () => {
				let license = 'A';
				let age = "kalle";
				expect(() => canGetLicense({})).toThrow();
		});
		test('valid input for A license', () => {
				let license = 'A';
				let age = 24;
				let actual = canGetLicense(license, age);
				let expected = true;
				expect(actual).toBe(expected);
		});
		test('Underage for A license', () => {
				let license = 'A';
				let age = 23;
				let actual = canGetLicense(license, age);
				let expected = false;
				expect(actual).toBe(expected);
		});
		test('valid input for B license', () => {
				let license = 'B';
				let age = 18;
				let actual = canGetLicense(license, age);
				let expected = true;
				expect(actual).toBe(expected);
		});
		test('Underage for B license', () => {
				let license = 'B';
				let age = 17;
				let actual = canGetLicense(license, age);
				let expected = false;
				expect(actual).toBe(expected);
		});
		test('valid input for BE license', () => {
				let license = 'BE';
				let age = 18;
				let actual = canGetLicense(license, age);
				let expected = true;
				expect(actual).toBe(expected);
		});
		test('Underage for BE license', () => {
				let license = 'BE';
				let age = 17;
				let actual = canGetLicense(license, age);
				let expected = false;
				expect(actual).toBe(expected);
		});
		test('valid input for C license', () => {
				let license = 'C';
				let age = 21;
				let actual = canGetLicense(license, age);
				let expected = true;
				expect(actual).toBe(expected);
		});
		test('Underage for C license', () => {
				let license = 'C';
				let age = 20;
				let actual = canGetLicense(license, age);
				let expected = false;
				expect(actual).toBe(expected);
		});
		test('valid input for D license', () => {
				let license = 'D';
				let age = 24;
				let actual = canGetLicense(license, age);
				let expected = true;
				expect(actual).toBe(expected);
		});
		test('Underage for D license', () => {
				let license = 'D';
				let age = 23;
				let actual = canGetLicense(license, age);
				let expected = false;
				expect(actual).toBe(expected);
		});
			test('throws if parameters are not valid', () => {
			expect(() => canGetLicense({})).toThrow();
		})
})


//
