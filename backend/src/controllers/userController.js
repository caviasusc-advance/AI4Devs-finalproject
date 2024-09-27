const User = require('../models/User');
const createUserDTO = require('../dto/createUserDTO');
const SystemConfiguration = require('../models/SystemConfiguration'); // Importar el modelo de SystemConfiguration

exports.createUser = async (req, res) => {
    try {
        const userData = createUserDTO(req.body);

        // Verificar que id_type corresponde a un valor de system_configuration con type: documentType
        const validIdType = await SystemConfiguration.findByTypeAndValue('documentType', userData.id_type);
        if (!validIdType) {
            return res.status(400).send({ error: 'Invalid id_type' });
        }

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