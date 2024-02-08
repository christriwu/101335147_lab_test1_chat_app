const express = require('express');
let mongoose = require('mongoose');
let UserRouter = require('./router/UserRouter');
const {Server} = require('socket.io');
const {createServer} = require('node:http');

const app = express();
const PORT = 3000;
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: `http://localhost:${PORT}`,
        methods: ["GET", "POST"],
    }
})



mongoose.connect('mongodb+srv://chrisTri:GP1y6xvBEGFrjqJD@cluster0.xfp6unm.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))



app.use(express.json());
app.use( UserRouter);
io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`);
 });


app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server running at http://localhost:${PORT}/`)
    }
    else{
        console.log(`Error: ${error}`)
    }
})