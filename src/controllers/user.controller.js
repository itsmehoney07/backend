import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const registerUser = asyncHandler( async (req,res)=>{
    //getting details of user
    //validation - not empty
    //cheking if the user already exists
    //check for images , check for avatar
    //upload them to cloudinary, check for avatar uploaded successfully
    //create user object -- create entry in db (user object is created for entry in mongodb because it is no sql database)
    //remove password and refresh token field from response we get after creating user
    //check for user creation
    //then return response
    const {username, email,fullname,password}=req.body;
    // if(username===""){
    //     throw new ApiError(400,"Username is required");
    // }
    //below code will help in checking all the fields in one go rather checking for each field 
    if([username,fullname,email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All fields are required");
    }
    /*
    checking if user already exists
    we can use below syntax if want to check using one field only
    const existedUser=User.findOne({username})
    */
   //for checking using more fields using operators
//    const existedUser=User.findOne({
//     $or:[{username},{email}]
//    })
//    if(existedUser){
//     throw new ApiError(409,"User Already exists");
//    }
   console.log(req.files);
   const avatarLocalPath=req.files.avatar[0].path;
   if(avatarLocalPath===""){
    return new ApiError(400,"Avatar is needed");
   }
   const avatarUrl=uploadOnCloudinary(avatarLocalPath);
   if(avatarUrl===""){
    return new ApiError(500,"not able to upload avatar imagae on cloudinary");
   }
   const coverImageLocalPath=req.files.coverImage[0].path;
   const coverImageUrl=  uploadOnCloudinary(coverImageLocalPath);
   const newUser=User.create({
    username: username.toLowerCase(),
    email,
    fullname,
    avatar:avatarUrl,
    coverImage:coverImageUrl || "",
    password:password
   })
   const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
   )
   if(!createdUser){
    return new ApiError(500,"Unable to add user to database right now");
   }
   return res.status(201).json(
        new ApiResponse(201,
            createdUser,
            "user added successfully"
        )
    )
})
// const registerUser = (req,res,next)=>{
//        res.status(200).json({
//             message:"okay"
//         })
// }
export {registerUser}