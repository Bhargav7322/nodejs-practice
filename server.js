// console.log("dfdsd") 

// const callBackfrist = () =>{
//     console.log("callback1")
// }
// const callBack = (callBackfrist) =>{
//     console.log("callback123")
//     callBackfrist()
// }
// callBack(callBackfrist)


// let fs = require("fs")
// let os = require("os")
 
//  const user = os.userInfo()

//  console.log("user",user)
//  console.log("user",user.username)
//  console.log(fs)
//  console.log(os)
//  fs.appendFile("greeting.text","hey welcome bro"+ user.username +"!\n",()=>{console.log("file created here")})

// const importnode = require("./nodeimport")
// const _= require("lodash")
// let dataAge = importnode.age
// console.log(dataAge)


// const array = ["bhargav",1,2,3,4,1,2,"meva","meva"]
// const filter = _.uniq(array)
// console.log("lodash",filter)



const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("my first api")
})

app.get("/bhargav",(req,res)=>{
    // res.send("trying api route")
    const bhargavData = {
        name:"meva",
        job:true,
        company:"bitbeast pvt ltd",
        salary:6000
    }
    res.send(bhargavData)
    res.send(bhargavData.job)
})

app.listen(4000,()=>{
    console.log("server runing")
})