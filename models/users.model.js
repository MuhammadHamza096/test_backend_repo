const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const schema =Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        address:{
            type:String,
        }
    },
    {
      versionKey:false,
      timestamps:true,
    }
)

module.exports = mongoose.model("user",schema)