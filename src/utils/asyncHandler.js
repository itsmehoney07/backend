//promise approach
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}


export {asyncHandler}

//try catch approach
//asyncHandler is an higher order function(fn that accepts other fn as an argument or either return them)  
// const asyncHandler = ()=>{} basic of asyncHandler
// const asyncHandler = (fn)=>{ ()=>{}} function passed is passed as an argument for another function 
// const asyncHandler =(fn) => () => {}
// const asyncHandler =(fn) => async () => {}
// const asyncHandler=(fn)=> async(req, res, next) => {
//     try{
//         await fn(req,res, next);
//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         });
//     }
// }