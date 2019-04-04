const mongoose = require('mongoose')
const URL = "mongodb+srv://moshab97:123456abc@supermercado-l1ohz.mongodb.net/supermercado?retryWrites=true"

mongoose.connect(URL,{useNewUrlParser:true}, (err)=>{
    if(!err) console.log('Conexión exitosa');
});
const Schema = mongoose.Schema;

const articuloSchema = new Schema({
    articulo: mongoose.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    existencias:{
        type: Number,
        default: 10
    }
},{timestamps:true});
const ticketSchema = new Schema({
    ticket: mongoose.Schema.ObjectId,
    subtotal:{
        type: Number,
        default: 0
    },
    iva:{
        type: Number,
        default: 0
    },
    total:{
        type: Number,
        default: 0
    },
    articulos:{}
},{timestamps:true})
// const superSchema = new Schema({
//     articulo:{
//         name:String,
//         precio:Number,
//         existencia: Number
//     },
//     ticket:{
//         subtotal: Number,
//         iva: Number,
//         total: Number,
//         articulos: {}
//     }
// },{timestamps:true})

