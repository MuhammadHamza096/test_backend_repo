const userModel = require("../models/users.model");

const post = (data) => {
  const model = new userModel(data);
  return model.save();
};
const get = async (filter) => {
    const searchValue=filter.search
  if(searchValue===""){
    return await userModel.find();
  } 
  else{
    return await  userModel.find().or([
        {name:{ $regex: new RegExp(searchValue, "i")}},
        {email:{ $regex: new RegExp(searchValue, "i")}},
        {address:{ $regex: new RegExp(searchValue, "i")}},
       
    ])
  }
  
};
const update = async (id,updateData) => {
  return await userModel.findByIdAndUpdate(id, updateData);
};
const deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};

module.exports = {
  post,
  get,
  update,
  deleteUser,
};
