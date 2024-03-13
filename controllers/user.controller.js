const { createToken } = require("../middleware/auth")
const { userService } = require("../services");

const register = async(req,res)=>{

    console.log(req.body)

    let body={
        email:req.body.email,
        password:req.body.password
    }



    const user=await userService.register(body)
    console.log(user);

   
    // res.render('./login',{email:user.email})
    // res.redirect('/')

    res.status(201).json({
        message:'user created',
        user
    })

}

const login = async(req,res)=>{

    console.log(req.body)
    let body = req.body

  const user = await userService.findUser(body.email)

  if(!user)
  {
    res.status(400).json({message:"user not found"})
  }
console.log(user);

  if(body.password != user.password)
  {
    res.status(400).json({message:'password invalid'})
  }

let data = {
    _id:user._id,
    role:user.role,
    email:user.email
}
  let token = createToken(data)
  console.log(token);

    res.cookie('token',token)
  res.status(200).json({message:'login success'})

}


const getProfile =(req,res)=>{

    let user = req.user

    res.status(200).json({message:'get profile success',user})
}

const usersdelete = async (req, res) => {
  try {
    const userid = req.params.userId;
    console.log(userid);
    const userExists = await userService.findById(userid);
    console.log(userExists);
    if (!userExists) {
      return res.json({ message: "user not found!" });
    }
    const deletedUser = await userService.deletedUser(userid);
    console.log(deletedUser);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error during user deletion:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = {register,login,getProfile,usersdelete}