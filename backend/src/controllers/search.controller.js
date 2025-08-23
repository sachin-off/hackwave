import { googleSearch } from "../services/googleService";
import fs from "fs"
import vision from "@google-cloud/vision"

const client = new vision.ImageAnnotatorClient();
export const textSearch = async (req,res)=>{
    try {
        const {q,brand,price} = req.query
        if(!q){
            return res.status(400).json({message:"query is required"})
        }
        let searchQuery  =q
        if(brand) searchQuery += `${brand}`;
        if(price) searchQuery += `under ${price}`

        const result = await googleSearch(searchQuery)
        res.json({
            success:true,
            query:searchQuery,
            count:result.length,
            result,
        })
    } catch (error) {
        console.log("error in textSearch",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const imageSearch =async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).json({message:"no image uploaded"})
        }
        const imagePath = req.file.path;
        const [result] = await client.labelDetection(imagePath);
        const labels = result.labelAnnotations.map(label=>label.description)
        if(labels.length === 0){
            return res.status(404).json({message:"No label detected in image"})
        }
        const query = labels.slice(0,3).join("")
        const results = await googleSearch(query);
        fs.unlink(imagePath,(err)=>{
            if(err){
                console.error("Failed to delete message",err.message)
            }
        })
        res.json({
            success:true,
            detectedLabels:labels.slice(0,5),
            query,
            count:results.length,
            results
        })
    } catch (error) {
        console.log("error in imageSearch",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}