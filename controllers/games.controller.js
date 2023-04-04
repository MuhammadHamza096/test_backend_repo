const gamesService = require("../services/games.service");

exports.create = async (req, res) => {
  const body = req.body;
  console.log("body", body);
  const date=new Date();
  const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  body.created=formattedDate;
  gamesService
    .post(body)
    .then((response) => {
        console.log("reponse",response)
      res.status(201).send({ message: "game added successfully" });
    })
    .catch((error) => {
      console.log("error message", error);
      res.send({ message: error });
    });
};

exports.get = async (req, res) => {
    const filter= req.query;
    console.log("filter",filter)
    let updateStartDate=""
    let updateEndDate="";
    const {startDate,endDate,search}=filter
    if(startDate!=="" && endDate!==""){
        const sDate=new Date(startDate);
        updateStartDate = sDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        const eDate=new Date(endDate);
        updateEndDate =eDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    }
    if(startDate!=="" && endDate===""){
        console.log("tu chala ya nai chala ")
        const sDate=new Date(startDate);
        updateStartDate = sDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        const eDate=new Date();
        updateEndDate = eDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        // console.log("updateEndDate",updateEndDate,eDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))
    }

    if(startDate=="" && endDate!==""){
        const sDate=new Date();
        updateStartDate = sDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        const eDate=new Date(endDate);
        updateEndDate = eDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    
    }
    const updatedFilter={search,startDate:updateStartDate,endDate:updateEndDate}
    console.log("updatedFilter",updatedFilter)
  gamesService
    .get(updatedFilter)
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
    gamesService
      .update(id,body)
      .then((response) => {
        console.log("response",response)
        res.status(200).send({ message:"game updated successfully" });
      })
      .catch((error) => {
        console.log("error", error);
        res.send({ error });
      });
  };


  exports.delete = async (req, res) => {
    const id=req.params.id 
    console.log("id",id)
    gamesService
      .deletegames(id)
      .then((response) => {
        console.log(response)
        res.status(200).send({ message:"game deleted successfully" });
      })
      .catch((error) => {
        console.log("error", error);
        res.send({ error });
      });
  };