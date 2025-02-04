import express from "express";

import post from "./routes/post.js"

const port = process.env.PORT || 8000;

const app = express();

app.use("/api/list",post);


app.listen(port,() =>{
    console.log(`Server Start in Port ${port}`);
    
})