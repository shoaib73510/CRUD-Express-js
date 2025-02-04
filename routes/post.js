import express from "express"

const route = express.Router();

let item = [
    {id:1,"title" :"admin"},
    {id:2,"title" :"Muthu"},
    {id:3,"title" :"Ezio"}
];
route.get("/",(req,res) =>{
    res.json(item);
})
export default route;