// const fs=require("fs");
// const quote="Rhagavi is beautiful";
// fs.writeFile("./awesome.html",quote,(err)=>
// {
//     console.log("Completed Writing😊");
// });


const fs=require("fs");
const quote2="live more worry less";
for(i=1;i<=10;i++)
{
    fs.appendFile(`./backup/text-${i}.html`,quote2,(err)=>
    {
        console.log("Life is beautiful💕");
    })
}