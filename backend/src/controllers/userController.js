const User = require('../models/User');
const createUserDTO = require('../dto/createUserDTO');
const SystemConfiguration = require('../models/SystemConfiguration');
const bcrypt = require('bcrypt');
const authController = require('./authController');

exports.createUser = async (req, res) => {
    try {
        const userData = createUserDTO(req.body);

        const validIdType = await SystemConfiguration.findByTypeAndValue('documentType', userData.id_type);
        if (!validIdType) {
            return res.status(400).send({ error: 'Invalid id_type' });
        }

        const existingUser = await User.findByIdTypeAndIdNumber(userData.id_type, userData.id_number);
        if (existingUser) {
            throw new Error('User with the same id_type and id_number already exists');
        }

        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(userData.password, salt);

        const newUser = await User.create(userData);
        const data = authController.generateCookieToken(newUser, res)
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};