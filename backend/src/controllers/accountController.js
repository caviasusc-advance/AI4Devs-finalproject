const Account = require('../models/Account');
const createAccountDTO = require('../dto/createAccountDTO');

function generateAccountNumber() {
    return Math.floor(100000000000 + Math.random() * 900000000000).toString();
}

exports.createAccount = async (req, res) => {
    try {
        const accountData = createAccountDTO(req.body);

        let accountNumber;
        let existingAccount;
        let attempts = 0;

        do {
            accountNumber = generateAccountNumber();
            existingAccount = await Account.findByAccountNumber(accountNumber);
            attempts++;
        } while (existingAccount && attempts < 5);

        if (existingAccount) {
            return res.status(400).send({ error: 'Unable to generate a unique account number' });
        }
        accountData.account_number = accountNumber;

        const newAccount = await Account.create(accountData);
        res.status(201).send(newAccount);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
