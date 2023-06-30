import User from '../Models/User.js'
import {verify} from 'jsonwebtoken'
export const authenticate= async(req,res,next)=>{
    try{ 
        const {authorization}=req.headers
       
        if(!authorization) throw new Error('new User ')

       const token= verify(authorization,process.env.JWT_TOKEN)

       if(!token) throw new Error('')
           const user= await User.findById(token.MongoUser)
           if(user){
            req.user=user  
            next()
           }else throw new Error('')              
                          
    }catch(err){ 
            res.status(400).json('now authorize')
            console.log('error in authentication ')
    }
        
}    
