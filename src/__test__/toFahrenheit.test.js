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
				expect(actual).toBeCloseTo(expected);
		});

		test('input is not number', () => {
				let param = "50";
				let expected = false;
				let actual = toFahrenheit(param);
				expect(actual).toBe(expected);
		})
})


//
