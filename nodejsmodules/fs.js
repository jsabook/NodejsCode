// // const fs = require('fs')
// // let dataStr = fs.readFile("hello.txt",'utf-8',(err,dataStr)=>{
// //    if (err == null) {
// //         return dataStr
// //    }    
// //    return null
// // })
// // console.log(dataStr)


// const  path = require("path")
// const fpath = "/a/b/c/index.html"

// let fullName = path.basename(fpath)
// console.log(fullName)
// let nameWithOutExt = path.basename(fpath,'.html')
// console.log(nameWithOutExt)

const fpath = "/a/b/c/index.html"
const path = require("path")

let ext = path.extname(fpath)
console.log(ext)