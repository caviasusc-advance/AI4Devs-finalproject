module.exports = (data) => {
    const { id_type, id_number, password } = data;

    if (!id_type || !id_number || !password ) {
        throw new Error('All fields are required');
    }

    return {
        id_type,
        id_number,
        password,
    };
};
