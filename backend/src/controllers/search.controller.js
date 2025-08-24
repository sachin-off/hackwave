import { googleSearch } from "../services/googleService.js";
import fs from "fs"
import { getImageLabels } from "../services/clipService.js";

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
        const labels = await getImageLabels(imagePath)
        if(labels.length === 0){
            return res.status(404).json({message:"No label detected in image"})
        }
        const query = labels.slice(0,3).join("")
        const results = await googleSearch(query);
        fs.unlinkSync(imagePath)
        res.json({
            success:true,
            query,
            labels,
            results
        })
    } catch (error) {
        console.log("error in imageSearch",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}