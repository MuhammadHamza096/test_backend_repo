const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const schema =Schema(
    {
        name:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true
        },
        created:{
            type:String,
            required:true
        }
    },
    {
      versionKey:false,
      timestamps:true,
    }
)

module.exports = mongoose.model("games",schema)