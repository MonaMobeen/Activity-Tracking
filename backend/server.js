const express = require('express');
const cors = require('cors');
 
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
ATLAS_URI= "mongodb+srv://Mona:0qcyGLgC1OIUh4jy@cluster0.vemqxx7.mongodb.net/?retryWrites=true&w=majority";
//  const connectionParams = {
// //     // useNewUrlParams: true,
//     useUnifiedTopology: true
// };

mongoose.connect(ATLAS_URI, ).then(() =>{
     console.log("MongoDB is connected")}).catch((err) => { console.log(err)});

 
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.listen(port, (req, res) => {
    console.log(`Server is running on port: ${port}`);
});