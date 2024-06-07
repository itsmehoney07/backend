import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res)=>{
    try{
        console.log("hello from controller")
        res.status(200).json({
            message:"ok"
        })
    }catch(err){
        console.log("response error", err)
    }

})
// const registerUser = (req,res,next)=>{
//        res.status(200).json({
//             message:"okay"
//         })
// }
const loginUser=(req,res)=>{
    console.log("hello from login")
    res.json({
        message:"helping"
    })
}
export {registerUser, loginUser}