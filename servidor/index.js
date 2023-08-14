const express = require('express');
const conectarBD = require('./config/db');
const cors = require ('cors');

const  app = express();
const PORT=4001;

conectarBD();

app.use(express.json());
app.use(cors());

app.use('/api/productos', require('./routes/productoRoutes'));

app.get ('/',(req,res)=> {
    res.send("hello mean")
})

app.listen(PORT, ()=>{
    console.log("Server Running") ;

})