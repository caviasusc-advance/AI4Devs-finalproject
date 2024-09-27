module.exports = (data) => {
    const { source_account_id, source_account_number, destination_account_number, amount } = data;

    if ( !(source_account_id && !source_account_number) || !destination_account_number || !amount ) {
        throw new Error('fields required');
    }
    return {
        source_account_id: data.source_account_id,
        source_account_number: data.source_account_number,
        destination_account_id: data.destination_account_id,
        destination_account_number: data.destination_account_number,
        amount: data.amount,
        description: data.description,
        date: new Date()
    };
};