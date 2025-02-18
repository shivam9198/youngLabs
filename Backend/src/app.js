const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors(
    {origin: 'http://localhost:5173',
    credentials: true,
    }
)); 
app.use(express.json()); 


app.get('/api/greet',async (req,res)=>{
   try {
    const {name} = req.query;
    if(!name){
    return res.status(400).json({ error: "Name is required." });}
    if (!isNaN(name)) {
        throw new Error("Name must not be a number");
    }
  

 res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
    
   } catch (error) {
    res.status(500).json(error.message);
   }
})


app.listen("7777",()=>{
    console.log("Server is running on port 7777");
})