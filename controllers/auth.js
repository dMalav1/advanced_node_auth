const User= require('../models/User');

exports.register=async(req,res,next)=>{
  const{username,email,password}=req.body;

  try {
    const user = await User.create({
      username,
      email,
      password
    });
    res.status(201).json({
      sucess:true,
      user,
    });
    
  } catch (error) {
    res.status(500).json({
      sucess:false,
      error:error.messsage,
    })
  }
    //res.send("Register Route");
}

exports.login = (req, res, next) => {
  res.send("Login Route");
};

exports.forgotpassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => {
  res.send("Reset Password Route");
};

