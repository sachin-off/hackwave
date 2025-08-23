import {pipeline} from "@xenva/transformer"

let embedder;
const loadModel = async() =>{
    if(!embedder){
        embedder = await pipeline("feature-extraction","Xenova/all-MiniLM-L6-v2")
    }
    return embedder;
};

const getEmbedding = async(text)=>{
    const model = await loadModel();
    const output = await model(text,{pooling:"mean",normalize:true});
    return Array.from(output.data)
}

const cosineSimilarity =(vecA,vecB)=>{
    const dot = vecA.reduce((sum,a,i)=>sum+a*vecB[i],0)
    const normA = Math.sqrt(vecA.reduce((sum,a)=>sum+a*a,0))
    const normB = Math.sqrt(vecB.reduce((sum,b)=>sum+b*b,0))
    return dot/(normA*normB)
}

export const rankresults = async(query,results)=>{
    const queryEmbedding = await getEmbedding(query)
    const scored = [];
    for(let result of results){
        const text =`${result.tittle} ${result.snippet}`
        const emb = await getEmbedding(text)
        const score = cosineSimilarity(queryEmbedding,emb)
        scored.push({...result,score})
    }
    scored.sort((a,b)=>b.score-a.score);
    return scored.slice(0,10)
}