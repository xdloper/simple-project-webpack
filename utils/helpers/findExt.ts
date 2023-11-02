export const findExt = (filename:string)=>{
    const split = filename.split('.')
    return split[split.length -1]
}