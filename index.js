import express from "express";

import post from "./routes/post.js"
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json())



app.use("/api/list",post);


app.listen(port,() =>{
    console.log(`Server Start in Port ${port}`);
    
})