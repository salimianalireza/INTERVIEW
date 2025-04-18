const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const graphQlServer = require('./services/graphQlService');
connectDB()

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json())

// app.get('/', (req,res)=>{
//   res.send("Hello from express");
// })

app.use('/api/users', userRoutes )

app.use('/graphql', graphQlServer)

app.listen('4000', ()=>{
  console.log('server is running on port 4000')
})