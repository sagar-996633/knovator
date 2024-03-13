const jwt = require('jsonwebtoken')

const createToken = (data)=>{
    return jwt.sign(data,process.env.SECRET)
}

const autheticate = (req,res,next)=>{
    const token = req.cookies['token']
    console.log(token,"token");
    if(!token)
    {
        res.status(400).json({message:"you are not login"})
    }

   let user = jwt.verify(token,process.env.SECRET)
   console.log(user);

   req.user = user
   next()

}

const restrict=(...data)=>{
return (req,res,next)=>{
    let user = req.user
    console.log(user,"restricttttt");
    if(data[0].includes(user.role))
    {
        req.user=user
        next()
    }
    res.status(400).json({message:"you are not allow"})
}
}

module.exports={createToken,autheticate,restrict}