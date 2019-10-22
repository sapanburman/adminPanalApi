const express=require('express');
let route=express.Router();
let controller=require('../controllers/register');
route.get('/admin',(req,res)=>{
    res.json({"message":"hello Admin"})
});
route.post('/adminRegister',controller.adminRegister);
// router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
//     res.json({
//       status:1,
//       message : 'Signup successful',
//       user : req.user 
//     });
//   });
module.exports=route;