import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res)=>{
        res.status(200).json({
            message:"ok"
        })
})
// const registerUser = (req,res,next)=>{
//        res.status(200).json({
//             message:"okay"
//         })
// }
const loginUser=(req,res)=>{
    res.json({
        message:"helping"
    })
}
export {registerUser, loginUser}