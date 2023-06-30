import Mail from "../Models/mail.js"
import User from "../Models/User.js"
export const getAllMail=async(req,res)=>{
    try{
        const sent=Boolean(req.query.sent)
        
        const mail=await Mail.find({
            $or:[{   
                sender:req.user._id
            },{
                receiver:req.user._id
            }]      
        })
       
        res.status(200).json({data:mail})
        
    }catch(err){
        res.status(500).json('error')
        console.log(err)
    }  
}
export const PostMail=async(req,res)=>{
    try{
        const {email,subject,message}=req.body    
        if(!validateEmail(email))return res.status(400).json({message:'bad request'})
        const rece=await User.findOne({email:email})
        if(!rece) return res.status(400).json({message:'email does not exit '})
        const mail=await Mail.create({
            sender:req.user._id,
            receiver:rece._id,
            senderName:req.user.name,
            receiverName:rece.name,
            message:message,
            subject:subject
        })  
    
res.status(200).json({message:mail._id})
    }catch(err){
        res.status(500).json('error')
        console.log(err)
    }
}
export const deleteMailById=async(req,res)=>{
    try{
        const deleteFromSent=req.query.sender
        if(deleteFromSent==='true'){
         
            await Mail.updateOne({_id:req.params.id},{sender:null })
        }
        if(deleteFromSent==='false'){
            await Mail.updateOne({_id:req.params.id},{receiver:null})
         
        }
        res.status(200).json({data:'deleted'})
    }catch(err){
        res.status(500).json({message:'server error'})
        console.log('this is error',err)
    }
}
export const makeMessagereadTrue=async(req,res)=>{
    try{
       
        await Mail.updateOne({_id:req.body._id},{read:true})
        res.status(200).json({data:'deleted'})
    }catch(err){
        res.status(500).json({message:'server error'})
        console.log('this is error')
    }
}

function validateEmail(str){
    let attherate=str.match('@')
    let dotcom=str.match('.com')
    if(attherate!==null&& dotcom!==null){
        return true
    }
    return false
}