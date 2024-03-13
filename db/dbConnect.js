const mongoose = require('mongoose')
const dbConnect = ()=>{


    mongoose.connect(`${process.env.MONGODB_URL}`).then(()=>{
        console.log('db connected');
    }).catch((err)=>{
        console.log(err,'err');
    })

}


module.exports=dbConnect