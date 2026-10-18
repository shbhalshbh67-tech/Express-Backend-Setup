const JWT = require('jsonwebtoken');
require('dotenv').config()

function verifyAdminToken(req,res,next){
const Bearer = req.headers.authorization;
if(!Bearer){
    return res.status(404).json({message:'token not found'});
}
try {
    const token = Bearer.split(' ')[1];
    const viriftTokn = JWT.verify(token,process.env.TOKEN_KEY);
    req.user = viriftTokn
    if(!req.user.isAdmin){
        return res.status(401).json({message:'your not admin'})
    }
    next();
} catch (error) {
    res.status(401).json({message:'token invalid',
        error
    });
}
}

module.exports = {
    verifyAdminToken
}