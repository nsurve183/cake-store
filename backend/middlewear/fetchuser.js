

const jwt = require('jsonwebtoken');
let secret_msg = "nikhilisareamanager"

const fetchUser = async (req, res, next) => {
  try {
    const token = req.header('token');
    if(!token){
        res.status(401).send({error: 'Pls authenticate with valid token'});
    }
    const verifyToken = await jwt.verify(token, secret_msg);
    req.user = verifyToken.user;
    
    next()
  } catch (error) {
    console.error(error.massage);
    res.status(401).send({error: 'Pls authenticate with valid token'});
  }
}

module.exports = fetchUser;

