const userService = require("../services/users.service");

exports.create = async (req, res) => {
  const body = req.body;
  
  console.log("body", body);
  userService
    .post(body)
    .then((response) => {
        console.log("reponse",response)
      res.status(201).send({ message: "user added successfully" });
    })
    .catch((error) => {
      console.log("error message", error);
      if(error.code===11000){
        res.status(409).send({message:"email already exist"})
      }
      else{
      res.status(500).send({ message: error });
      }
    });
};

exports.get = async (req, res) => {
    const filter= req.query;
    console.log("filter",filter)
  userService
    .get(filter)
    .then((response) => {
      res.status(200).send({ response });
    })
    .catch((error) => {
      console.log("error", error);
      res.send({ error });
    });
};

exports.update = async (req, res) => {
    const body = req.body;
    const id=req.params.id 
  console.log("body", body,id);
//   console.l
    userService
      .update(id,body)
      .then((response) => {
        console.log("response",response)
        res.status(200).send({ message:"User updated successfully" });
      })
      .catch((error) => {
        console.log("error", error);
        if(error.code===11000){
            res.status(409).send({message:"email already exist"})
          }
          else{
          res.status(500).send({ message: error });
          }
      });
  };


  exports.delete = async (req, res) => {
    const id=req.params.id 
    console.log("id",id)
    userService
      .deleteUser(id)
      .then((response) => {
        console.log(response)
        res.status(200).send({ message:"User deleted successfully" });
      })
      .catch((error) => {
        console.log("error", error);
        res.send({ error });
      });
  };