import path from 'path'
import fs from 'fs'

export function filePathFinder({URL="",fileName="",ignore=[]}:{URL:string,fileName:string,ignore:Array<string>}):Array<string>{
    try{
        const resolvedURL:string = path.resolve(URL)

        const findedFileArray:Array<string> = []

        function reversibleDirectoryFinder(directory:string){
            const files:Array<string> = fs.readdirSync(directory)

            files.forEach((file,index)=>{
                const filePath:string = path.join(directory,file)
                const isDirectory:boolean = fs.statSync(filePath).isDirectory()
                const pathSplit:Array<string> = filePath.split('\\')
                const pathFix:string = pathSplit.join('/')

                const filteredItems = pathSplit.filter(item => ignore.includes(item)).length;

                if(file === fileName && filteredItems <= 1){
                    findedFileArray.push(pathFix)
                }

                if(isDirectory){
                    reversibleDirectoryFinder(filePath)
                }
            })
        }

        reversibleDirectoryFinder(resolvedURL)

        return findedFileArray
    }catch(error){
        new Error('error code: '+error)
        console.error('filePathFinder error code: ' , error)
        return []
    }
} 