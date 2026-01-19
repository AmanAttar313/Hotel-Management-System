import User from '../models/User.js';

 //middle to verify if user exists in Authecated
 export const protect = async (req, res, next) => {
    const{userId}=req.auth();
    if(!userId){
        res.json({success:false,message:"Not Authenticated"});
    }else  {
        const user = await User.findById(userId);
        req.user=user;
        next();   
    }
}
