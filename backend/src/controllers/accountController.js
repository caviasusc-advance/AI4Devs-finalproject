const Account = require('../models/Account');
const createAccountDTO = require('../dto/createAccountDTO');
const SystemConfiguration = require('../models/SystemConfiguration'); // Importar el modelo de SystemConfiguration

function generateAccountNumber() {
    return Math.floor(100000000000 + Math.random() * 900000000000).toString();
}

exports.createAccount = async (req, res) => {
    try {
        const accountData = createAccountDTO({
            ...req.body,
            user_id: res.locals.userid
        });

        let accountNumber;
        let existingAccount;
        let attempts = 0;

        const validIdType = await SystemConfiguration.findByTypeAndValue('accountType', accountData.account_type);
        if (!validIdType) {
            return res.status(400).send({ error: 'Invalid account_type' });
        }

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

exports.getAccountsByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const accounts = await Account.findByUserId(userId);
        res.status(200).send(accounts);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};