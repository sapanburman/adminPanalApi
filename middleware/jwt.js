const jwt =require('jsonwebtoken');
const signature =require('../config/config');
class AuthService {
  constructor(user){
   
    this.user=user


  }
    generateToken() {
   
    
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign(this.user, signature.jwtSecret, { expiresIn: expiry });
     
  }

  decodeJwt(token){
    return jwt.verify(token, signature.jwtSecret);
   
  }
}

module.exports=AuthService;