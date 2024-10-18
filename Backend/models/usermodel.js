const mongoose = require('mongoose')

const user = new mongoose.Schema(
    {
        name: {type:String , require:true},
        email : {type: String , require : true , unique : true },
        password: {type :String , require : true},
        createdAt : {type : Date , require : true , default : Date.now }
    },
    { collaction :'user-data'}
)

const usermodel = mongoose.model('user-data' , user)

module.exports = usermodel