const SystemConfiguration = require('../models/SystemConfiguration');

exports.getByType = async (req, res) => {
    try {
        const { type } = req.params;
        const configurations = await SystemConfiguration.findByType(type)

        res.status(200).json(configurations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};