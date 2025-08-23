import axios from "axios"
import { rankresults } from "./aiService";

export const googleSearch =(query)=>{
    try {
        const apiKey = process.env.CSE_API;
        const cx = process.env.SEARCH_ENGINE_ID
        const url = `https://www.googleapis.com/customesearch/v1/?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`
        const {data} = await axios.get(url);
        const items =  data.items||[]
        const ranked = await rankresults(query,items);
    } catch (error) {
        console.log("error in googleServices",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}