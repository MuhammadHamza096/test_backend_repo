const gamesModel = require("../models/games.model");

const post = (data) => {
  const model = new gamesModel(data);
  return model.save();
};
const get = async (filter) => {
    const {search,startDate,endDate} = filter
  if(search==="" && startDate==="" && endDate===""){
    return await gamesModel.find();
  } 
  else if(search !=="" && startDate==="" && endDate==="" ){
    return await  gamesModel.find().or([
        {name: {$regex: new RegExp(search, "i")}},
    {category: {$regex: new RegExp(search, "i")}}
    ])
  }
  else if(search ==="" && startDate!=="" && endDate!=="" ){
    return await  gamesModel.find({created:{ $gte: startDate, $lte: endDate }})
  }
  else if(search !=="" && startDate!=="" && endDate!==""){
    return await  gamesModel.find({
        $and: [
          { created: { $gte: startDate, $lte: endDate } },
          { $or: [
            {name: {$regex: new RegExp(search, "i")}},
            {category: {$regex: new RegExp(search, "i")}}
            ]
          }
        ]
      })
  }
  
};
const update = async (id,updateData) => {
  return await gamesModel.findByIdAndUpdate(id, updateData);
};
const deletegames = async (id) => {
  return await gamesModel.findByIdAndDelete(id);
};

module.exports = {
  post,
  get,
  update,
  deletegames,
};
