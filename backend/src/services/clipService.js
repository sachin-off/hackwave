import {pipeline} from "@xenova/transformers"

let extractor = null;
const loadModel =async()=>{
    if(!extractor){
        extractor = await pipeline("zero-shot-image-classification","Xenova/clip-vit-base-patch32")
    }
    return extractor
}

export const getImageLabels = async(imagePath)=>{
    const extractor = await loadModel();
    const canditateLabels = ["Nike shoes","Adidas shoes","Puma hoodie","Levi's jeans","Gucci bag","formal shirt"]
    const results = await extractor(imagePath,canditateLabels)
    return results[0].label;
}