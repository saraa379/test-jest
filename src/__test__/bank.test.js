import {deposit, withdraw, transfer, kalle, greta} from '../bank.js';

describe('bank test suite', () => {
		test('deposit with valid input kalle', () => {
				let amount = 200;
				deposit(kalle, amount);
				let expected = 150 + amount;
				expect(kalle.balance).toBe(expected);
		});
		test('deposit with valid input greta', () => {
				let amount = 100;
				deposit(greta, amount);
				let expected = 1200 + amount;
				expect(greta.balance).toBe(expected);
		});
		test('withdraw with valid input kalle', () => {
				let amount = 200;
				withdraw(kalle, amount);
				let expected = 150;
				expect(kalle.balance).toBe(expected);
		});
		test('withdraw with valid input greta', () => {
				let amount = 100;
				withdraw(greta, amount);
				let expected = 1200;
				expect(greta.balance).toBe(expected);
		});
		test('withdraw with invalid minus amount kalle', () => {
				let amount = -1;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('withdraw with 0 amount kalle', () => {
				let amount = 0;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('withdraw with amount higher than balance kalle', () => {
				let amount = 1000;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('transfer with valid input greta to kalle', () => {
				let amount = 100;
				transfer(greta, kalle, amount);
				expect(greta.balance).toBe(1100);
				expect(kalle.balance).toBe(250);
		});
		test('transfer with invalid sender', () => {
				let amount = 100;
				expect(() => transfer("str", kalle, amount)).toThrow();
		});
		test('transfer with invalid reciever', () => {
				let amount = 100;
				expect(() => transfer(greta, null, amount)).toThrow();
		});
		test('transfer with invalid amount', () => {
				let amount = 1101;
				expect(() => transfer(greta, kalle, amount)).toThrow();
		});
})


//
