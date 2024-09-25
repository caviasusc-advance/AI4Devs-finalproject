const User = require('../models/User');
const createUserDTO = require('../dto/createUserDTO');

exports.createUser = async (req, res) => {
    try {
        const userData = createUserDTO(req.body);

        const existingUser = await User.findByIdTypeAndIdNumber(userData.id_type, userData.id_number);
        if (existingUser) {
            throw new Error('User with the same id_type and id_number already exists');
        }

        const newUser = await User.create(userData);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
