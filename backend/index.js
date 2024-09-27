const express = require('express');
const cors = require('cors')
require('dotenv').config();
const {createTodo, updateTodo} = require('./types');
const {todo} = require('./db');

const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))
PORT = process.env.PORT || 3001

app.post('/todos', async (req, res)=>{
    const payload = req.body;
    const parsedpayload = createTodo.safeParse(payload);

    if(!parsedpayload.success){
        res.status(400).json({msg:'You\'ve sent wrong inputs'});
        return;
    }

    await todo.create({
        title: payload.title,
        description: payload.description,
        completed:false
    });

    res.status(200).json({msg:"Todo Creates Successfully"});

})

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({}).populate();
    res.status(200).json({todos});
})

app.put('/completed', async (req, res)=>{
    const payload = req.body;
    const parsedpayload = updateTodo.safeParse(payload);

    if(!parsedpayload.success){
        res.status(400).json({msg:'You\'ve sent wrong inputs'})
        return;
    }

    await todo.updateOne({_id: payload.id}, {completed:true});

    res.status(200).json({msg:"Todo Updated Successfully"})
})


app.listen(PORT, ()=>console.log("App Started at http://localhost:"+PORT));
