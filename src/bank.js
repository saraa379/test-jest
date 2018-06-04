
let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };

function deposit(account, amount) {
		if((typeof amount) !== 'number') {
				throw new Error('Invalid amount');
		} else if (amount <= 0) {
				throw new Error('Amount must be more than 0');
		} else if ((typeof account.balance) !== 'number') {
				throw new Error('Invalid account');
		} else if (account.balance < 0) {
				throw new Error('Account balance must not be minus');
		} else {
					account.balance += amount;
		}
}
function withdraw(account, amount) {
		if( amount <= 0){
				throw new Error('Amount must be a positive number!');
		} else if ((typeof amount) !== 'number'){
				throw new Error('Invalid amount');
		} else if ((typeof account.balance) !== 'number') {
					throw new Error('Invalid account');
		} else if (account.balance < 0) {
				throw new Error('Account balance must not be minus');
		} else if (account.balance < amount){
				throw new Error('Amount must be not less than balance!');
		} else {
				account.balance -= amount;
		}
}
function transfer(accountSender, accountReceiver, amount) {
		if( (typeof accountSender.balance) !== 'number'
	 			|| (typeof accountReceiver.balance) !== 'number'){
						throw new Error('Invalid account balance');
		} else if ( accountSender.balance < 0 || accountReceiver.balance < 0 ){
				throw new Error('Account balance shouldnt be minus');
		} else if ((typeof amount) !== 'number'){
				throw new Error('Invalid amount');
		} else if (amount <= 0) {
				throw new Error('Amount must be more than 0');
		} else if(accountSender.balance < amount){
						throw new Error('Account balance is not enough');
		} else {
				accountSender.balance -= amount;
				accountReceiver.balance += amount;
		}
}


export {deposit, withdraw, transfer};



//
