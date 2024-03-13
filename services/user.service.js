const { userSchema } = require("../models")
const register = (body)=>{
    return userSchema.create(body)
}


const findUser =(email)=>{
    return userSchema.findOne({email})
}

const deletedUser = (userId) => {
    return userSchema.findByIdAndDelete(userId);
  };

  const findById =(userid)=>{
    return userSchema.findById(userid)
  }

module.exports = {register,findUser,deletedUser,findById}