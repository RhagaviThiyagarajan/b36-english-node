const fs=require("fs");
fs.unlink("./delete-me.css",(err)=>
{
  if(err)
  {
    console.log(err) 
  }
  else{
    console.log("completed updating🎂");
  }
})
