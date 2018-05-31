
let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };

function deposit(account, amount) {
		account.balance += amount;
}
function withdraw(account, amount) {
		if( amount <= 0){
				throw new Error('Amount must be a positive number!');
		} else if (account.balance < amount){
				throw new Error('Amount must be not less than balance!');
		} else {
				account.balance -= amount;
		}
}
function transfer(accountSender, accountReceiver, amount) {
		if( (typeof accountReceiver.balance) !== 'number'
	 			|| (typeof accountReceiver.balance) !== 'number'){
						throw new Error('Invalid account balance');
		} else if(accountSender.balance < amount){
						throw new Error('Account balance is not enough');
		} else {
				accountSender.balance -= amount;
				accountReceiver.balance += amount;
		}
}


export {deposit, withdraw, transfer, kalle, greta};



//
