import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
// fs is refered as file system


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY , 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=> {
    try{
        if(!localFilePath) return null;
        //upload the file inside cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"});
        //file is uploaded successfully then
        console.log("file is uploaded inside cloudinary and have the public url", resourse.url);
        return response;
    }catch(error){
        fs.unlink(localFilePath) // unlink the file if it was not uploaded in cloudinary
        console.log("error", error)
    }

}
export default {uploadOnCloudinary}
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });