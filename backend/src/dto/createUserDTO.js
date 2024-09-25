module.exports = (data) => {
    const { id_type, id_number, name, email, password, phone, address, birth_date } = data;

    if (!id_type || !id_number || !name || !email || !password || !phone || !address || !birth_date) {
        throw new Error('All fields are required');
    }

    return {
        id_type,
        id_number,
        name,
        email,
        password,
        phone,
        address,
        birth_date,
        registration_date: new Date(),
        status: 'active',
        created: new Date(),
        created_by: 'system',
        updated: new Date(),
        updated_by: 'system'
    };
};
