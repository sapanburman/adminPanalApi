let Admin=require('../modals/admin');
adminRegister=async (req,res,next)=>{

    admin= await new Admin({
        name:{
            first:req.body.fname,
            last:req.body.lname,
        },
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    });
    console.log(admin)
    res.json({status:200})
next();
}

module.exports={
    adminRegister
}