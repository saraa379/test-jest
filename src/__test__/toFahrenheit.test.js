import {toFahrenheit} from '../toFahrenheit.js';

describe('isNumber test suite', () => {
		test('input is number', () => {
				let param = 50;
				let expected = 122;
				let actual = toFahrenheit(param);
				expect(actual).toBe(expected);
		});

		test('input is not number', () => {
				let param = "50";
				let expected = false;
				let actual = toFahrenheit(param);
				expect(actual).toBe(expected);
		})
})


//
