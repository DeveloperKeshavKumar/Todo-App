const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("DataBase Connected Successfully.")
})
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {todo} // if key and value both are same => {todos:todos}