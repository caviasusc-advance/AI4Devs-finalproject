const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const loginUserDTO = require('../dto/loginUserDTO');

exports.generateCookieToken = (user, res) => {
    const data = {
        userid: user.id,
        name: user.name,
    
    }
    const token = jwt.sign(
        data,
        process.env.TOKEN_SECRET,
        { expiresIn: '1h' }
    )

    res.cookie('bank-auth', token, { httpOnly: true })
    res.cookie('log-state', 'logged')

    return data
}
exports.logInUser = async(req,res)=>{
    try {
        const info = loginUserDTO(req.body);
        const user = await User.findByIdTypeAndIdNumber(info.id_type, info.id_number);
        if(!user)
            throw new Error('user or password not valid');
        
        const validPassword = await bcrypt.compare(info.password, user.password);
        if (!validPassword) 
            throw new Error('user or password not valid');

        const data = this.generateCookieToken(user, res)

        res.status(201).send(data);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.logOutUser = async(req,res)=>{
    try {
        res.cookie('bank-auth', '', { httpOnly: true })
        res.cookie('log-state', '')

        res.status(201).send({session: false});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};