
import {Schema,model}from 'mongoose'
const user=new Schema({
name:{
    type:String,
    
},
mail:[{type:Schema.Types.ObjectId,ref:'mailBox'}]
})

export default model('user',user)