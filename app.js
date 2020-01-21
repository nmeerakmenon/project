var express=require('express');
var userrouter=require('./Routes/UserRouter');
var fs=require('fs');
var ffmpeg = require("ffmpeg");
var port = process.env.PORT || 8080;

const app=express();
app.use("/user",userrouter);
app.get("/msg",function(req,res){
    res.send("hello")
})



app.get("/stream",function(req,res){
//******************************************** 



try {
    var path = './Assets/manju.mp4';
var watermarkPath = './Assets/wmi.png',
newFilepath = './Assets/wmiu.mp4',


 process = new ffmpeg(path);
    
	process.then(function (video) {
		// Callback mode
		video.fnAddWatermark(watermarkPath,  {
			position : 'SE'
		}, function (error, file) {
			if (!error)
                console.log('New video file: ' + file);
                else{
                    console.log(error)
                }
        });
       
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}
  

//************************** */





    // const path1="./Assets/manju.mp4";
    // const stat=fs.statSync(path1);
    // const fileSize=stat.size;
    // const range=req.headers.range;
    // if(range){
    //     const parts = range.replace(/bytes=/, "").split("-");
    //     const start = parseInt(parts[0], 10)
    //     const end = parts[1]
    //   ? parseInt(parts[1], 10)
    //   : fileSize - 1
    // const chunksize = (end - start) + 1

    // const file = fs.createReadStream(path1, { start, end })
    // const head = {
    //     'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    //     'Accept-Ranges': 'bytes',
    //     'Content-Length': chunksize,
    //     'Content-Type': 'video/mp4',
    //   }
    //   res.writeHead(206, head);
    //   file.pipe(res);
    // } else {
    //   const head = {
    //     'Content-Length': fileSize,
    //     'Content-Type': 'video/mp4',
    //   }
    //   res.writeHead(200, head)
    //   fs.createReadStream(path1).pipe(res)

    // }

})

app.listen(port,function(){
    console.log("server started listening...")
})
