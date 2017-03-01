var http=require("http");
var formidable=require("formidable");
var server=http.createServer(function(req,res){
	if(req.method=="POST")
		{
			upload(req,res);}
})
function upload(req,res){
	
	if(!isFormData(req))
		{
			res.statusCode=400;
			res.end("err:multipart/form-data")
			return;
		}
		var form=new formidable.IncomingForm();
		form.uploadDir="C:/Users/BUPTIET/Desktop/1/tmp"
		form.on('field',function(field,value){
			console.log(field);
			console.log(value);
		})
		form.on('file',function(name,file){
			console.log(name)
			console.log(file)
		})
		form.on('end',function(){
			console.log("complete")
			res.end("success")
		})
		form.parse(req);
}
function isFormData(req){
	var type=req.headers['content-type']||'';
	return 0==type.indexOf('multipart/form-data');
}
server.listen(3000);