let express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.route");
const gameRouter = require("./routes/games.route");


const bodyParser=require("body-parser");
const cors = require("cors");
var app = express();



mongoose.connect(
  "mongodb+srv://hamza:123@cluster0.3ndxa0z.mongodb.net/testData?retryWrites=true&w=majority",
  {
    // bufferTimeoutMS: 20000, // Increase the buffering timeout to 20 seconds
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // connectTimeoutMS: 500000,
    // serverSelectionTimeoutMS: 3000
  }
).then(() => console.log('MongoDB connected'))
.catch(err => console.error("errrrrr",err));

app.use(cors());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(bodyParser.json());
app.use("/api/v1/users", userRouter.router);
app.use("/api/v1/games", gameRouter.router);


app.get("/", (req, res) => {
  res.send("done");
});

app.listen(4000, () => {
  console.log("connected");
});

module.exports = app;
