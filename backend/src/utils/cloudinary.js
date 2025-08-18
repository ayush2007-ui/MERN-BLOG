import { v2 as cloudinary } from 'cloudinary'
import fs from "fs";

console.log("sao",  process.env.CLOUDINARY_CLOUD_NAME);


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log(("File uploded suessfully", response.url));
        
        if(fs.existsSync(localFilePath)) {
            fs.rmSync(localFilePath);
        }
        return response;

    } catch(error) {
        console.log("Error occur while uploading on cloudinary",error);
        
        if(fs.existsSync(localFilePath)) {
            fs.rmSync(localFilePath);
        }
        return null;
    }
};

export {uploadOnCloudinary};