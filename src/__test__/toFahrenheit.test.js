import {toFahrenheit} from '../toFahrenheit.js';

describe('toFahrenheit test suite', () => {
		test('input is valid celcius', () => {
				let param = 50;
				let expected = 122;
				let actual = toFahrenheit(param);
				expect(actual).toBe(expected);
		});

		test('input is valid celcius: 0', () => {
				let param = 0;
				let expected = 32;
				let actual = toFahrenheit(param);
				expect(actual).toBe(expected);
		});

		test('input less than valid temp', () => {
				let param = -273.16;
				let expected = true;
				let answerNan = toFahrenheit(param);
				let booleanValue = isNaN(answerNan);
				expect(expected).toBe(booleanValue);
		});

		test('input is lowest possible valid temp', () => {
				let param = -273.15;
				let expected = -460;
				let actual = toFahrenheit(param);
				let rounded = Math.round(actual);
				expect(rounded).toBeCloseTo(expected);
		});
		test('input is highest possible valid temp', () => {
				let param = 5500000000000;
				let expected = 9900000000032;
				let actual = toFahrenheit(param);
				expect(actual).toBe(expected);
		});
		test('input is higher than valid temp', () => {
				let param = 5500000000000.1;
				let expected = true;
				let answerNan = toFahrenheit(param);
				let booleanValue = isNaN(answerNan);
				expect(expected).toBe(booleanValue);
		});

		test('input is valid string number', () => {
				let param = "50";
				let expected = 122;
				let actual = toFahrenheit(param);
				expect(actual).toBe(expected);
		});
		test('input is invalid string', () => {
				let param = "kalle";
				let expected = true;
				let answerNan = toFahrenheit(param);
				let booleanValue = isNaN(answerNan);
				expect(expected).toBe(booleanValue);
		});
		test('input is invalid: Infinity', () => {
				let param = Infinity;
				let expected = true;
				let answerNan = toFahrenheit(param);
				let booleanValue = isNaN(answerNan);
				expect(expected).toBe(booleanValue);
		});
		test('input is invalid: null', () => {
				let param = null;
				let expected = true;
				let answerNan = toFahrenheit(param);
				let booleanValue = isNaN(answerNan);
				expect(expected).toBe(booleanValue);
		});
		test('input is invalid: undefined', () => {
				let param = undefined;
				let expected = true;
				let answerNan = toFahrenheit(param);
				let booleanValue = isNaN(answerNan);
				expect(expected).toBe(booleanValue);
		})
})


//
