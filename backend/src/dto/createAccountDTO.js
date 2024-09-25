module.exports = (data) => {
    const { account_number, account_type, initial_balance, user_id } = data;

    if ( !account_type || !user_id) {
        throw new Error('All fields are required' + JSON.stringify(data));
    }

    return {
        account_number,
        account_type,
        balance:initial_balance,
        user_id,
        created: new Date(),
        created_by: 'system',
        updated: new Date(),
        updated_by: 'system'
    };
};
