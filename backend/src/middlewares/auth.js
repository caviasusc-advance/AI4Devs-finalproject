const jwt = require('jsonwebtoken');


const authMiddleware = async (req, res, next) => {
  try {
    const authToken = req.cookies['bank-auth'];
    if (!authToken) throw new Error('token needed')
          

      const {...verified } = jwt.verify(authToken, process.env.TOKEN_SECRET);

      res.locals = {
        ...res.locals,
        ...verified,
      };

    next();
  } catch (error) {
    let expired;
    if (error.message == 'jwt expired') {
      expired = true;
    }
    res.cookie('bank-auth', '', { httpOnly: true })
    res.cookie('log-state', '')
    res.status(401).send({
      expired: expired,
    });
  }
};

module.exports = authMiddleware;
