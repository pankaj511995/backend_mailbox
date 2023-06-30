import {Schema,model, now} from 'mongoose'

const mail=new Schema({
    sender:{
        type:Schema.Types.ObjectId,
        require:true
    },
    receiver:{
        type:Schema.Types.ObjectId,
        require:true
    },
    read:{
        type:Boolean,
        default:false
    },
    senderName:{
        type:String,
        require:true
    },
    receiverName:{
        type:String,
        require:true
    }
    ,createdAt:{
        type: Date,
        default : Date.now
    },
    message:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    }
})

export default model('mailBox',mail)