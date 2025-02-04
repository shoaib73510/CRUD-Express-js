import express from "express"

const route = express.Router();

let item = [];

//Show item
route.get("/",(req,res) =>{
    res.json(item);
})

//Find item using id
route.get("/:id",(req,res) =>{
    const list = item.find((roll) => roll.id === parseInt(req.params.id) );
    if(!list) return res.status(404).json({"Message":"List Not Found"}); 
    res.json(list)
})

//Add item
route.post("/",(req,res) =>{
    const list = {
        id:item.length + 1,
        name:req.body.name,
    }
    item.push(list)
    res.status(201).json(item)
})

//Update item using id
route.put("/:id",(req,res) =>{
    const list = item.find((roll) => roll.id === parseInt(req.params.id) );
    if(!list) return res.status(404).json({"Message":"List Not Found"}); 


    item.name = req.body.name;
    res.json(item)
})

//Del item using id
route.put("/:id",(req,res) =>{
    const list = item.find((roll) => roll.id === parseInt(req.params.id) );
    if(!list) return res.status(404).json({"Message":"List Not Found"}); 


    item.splice(list,1);
    res.status(204).send();
})


export default route;