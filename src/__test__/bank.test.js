import {deposit, withdraw, transfer} from '../bank.js';

describe('bank test suite', () => {
		test('deposit with valid input kalle', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = 200;
				deposit(kalle, amount);
				let expected = 150 + amount;
				expect(kalle.balance).toBe(expected);
		});
		test('deposit with valid input greta', () => {
				let greta = { name: 'Greta', balance: 1200 };
				let amount = 100;
				deposit(greta, amount);
				let expected = 1300;
				expect(greta.balance).toBe(expected);
		});
		test('deposit with invalid amount kalle', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = undefined;
				expect(() => deposit(kalle, amount)).toThrow();
		});
		test('deposit with invalid account', () => {
				let kalle = undefined;
				let amount = 100;
				expect(() => deposit(kalle, amount)).toThrow();
		});
		test('deposit with 0 amount', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = 0;
				expect(() => deposit(kalle, amount)).toThrow();
		});
		test('deposit: balance is minus number', () => {
				let kalle = { name: 'Kalle', balance: -150 };
				let amount = 10;
				expect(() => deposit(kalle, amount)).toThrow();
		});
		test('deposit with minus amount', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = -10;
				expect(() => deposit(kalle, amount)).toThrow();
		});
		test('withdraw with valid input kalle', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = 100;
				withdraw(kalle, amount);
				let expected = 50;
				expect(kalle.balance).toBe(expected);
		});
		test('withdraw with valid input greta', () => {
				let greta = { name: 'Greta', balance: 1200 };
				let amount = 100;
				withdraw(greta, amount);
				let expected = 1100;
				expect(greta.balance).toBe(expected);
		});
		test('withdraw with invalid minus amount kalle', () => {
			let kalle = { name: 'Kalle', balance: 150 };
				let amount = -1;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('withdraw with invalid amount kalle', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = undefined;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('withdraw with 0 amount kalle', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = 0;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('withdraw with invalid account', () => {
				let kalle = undefined;
				let amount = 100;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('withdraw: balance is minus number', () => {
				let kalle = { name: 'Kalle', balance: -150 };
				let amount = 10;
				expect(() => deposit(kalle, amount)).toThrow();
		});
		test('withdraw with amount higher than balance kalle', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = 1000;
				expect(() => withdraw(kalle, amount)).toThrow();
		});
		test('transfer with valid input greta to kalle', () => {
				let greta = { name: 'Greta', balance: 1200 };
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = 100;
				transfer(greta, kalle, amount);
				expect(greta.balance).toBe(1100);
				expect(kalle.balance).toBe(250);
		});
		test('transfer with invalid sender', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let amount = 100;
				expect(() => transfer("str", kalle, amount)).toThrow();
		});
		test('transfer with invalid reciever', () => {
				let greta = { name: 'Greta', balance: 1200 };
				let amount = 100;
				expect(() => transfer(greta, null, amount)).toThrow();
		});
		test('transfer with invalid amount', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let greta = { name: 'Greta', balance: 1200 };
				let amount = 1201;
				expect(() => transfer(greta, kalle, amount)).toThrow();
		});
		test('transfer with invalid amount', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let greta = { name: 'Greta', balance: 1200 };
				let amount = "";
				expect(() => transfer(greta, kalle, amount)).toThrow();
		});
		test('transfer with minus amount', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let greta = { name: 'Greta', balance: 1200 };
				let amount = -8;
				expect(() => transfer(greta, kalle, amount)).toThrow();
		});
		test('transfer with 0 amount', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let greta = { name: 'Greta', balance: 1200 };
				let amount = 0;
				expect(() => transfer(greta, kalle, amount)).toThrow();
		});
		test('transfer: sender balance is minus number', () => {
				let kalle = { name: 'Kalle', balance: 150 };
				let greta = { name: 'Greta', balance: -1200 };
				let amount = 10;
				expect(() => transfer(greta, kalle, amount)).toThrow();
		});
		test('transfer: reciever balance is minus number', () => {
				let kalle = { name: 'Kalle', balance: -150 };
				let greta = { name: 'Greta', balance: 1200 };
				let amount = 10;
				expect(() => transfer(greta, kalle, amount)).toThrow();
		});
})


//
