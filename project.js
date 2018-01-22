var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
var url = bodyParser.urlencoded({extended:false});
var Ss="";
var userArr = { user: [] };
app.set("view engine", "ejs");


var server = app.listen(8080, listening);

function listening(){

   console.log("listening")

}

app.use(express.static("views"))

var data = { 
	quotes:[{
		author: 'Shel Silverstein',
		list: [
			'I feel this is right for me, I know that this is wrong. No teacher, preacher, parent, friend Or wise man can decide Whats right for you just listen to The voice that speaks inside. - Shel Silverstein',
			'Tell my Im clever, Tell me Im kind, Tell me Im talented, Tell me Im cute, Tell me Im sensitive, Graceful and Wise Tell me Im perfect-- But tell me the TRUTH. - Shel Silverstein, Falling Up',
			'The bridge will only take you halfway there, to those mysterious lands you long to see. Through gypsy camps and swirling Arab fair, and moonlit woods where unicorns run free. So come and walk awhile with me and share the twisting trails and wondrous worlds Ive known. But this bridge will only take you halfway there. The last few steps you have to take alone. ― Shel Silverstein'
			]
		}, {
		author: 'Paulo Coelho',
		list: [
			'Its the possibility of having a dream come true that makes life interesting. ― Paulo Coelho, The Alchemist',
			'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too. ― Paulo Coelho, The Alchemist',
			'Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own. ― Paulo Coelho, The Alchemist'
			]
	}]

};
app.post("/a", url, function(request, response){

    author= request.body.authorName;
    userArr.user[0] = "me";

    if(author == "Shel Silverstein"){
    	Ss= "Shel Silverstein";
    }
    else if(author == "Paul Coelho"){
    	Ss= "Paul Coelho";
    }
    console.log(Ss);
    

});

app.get("/", function(req, res){
	console.log('hiiii')
	console.log(Ss);//we were trying to print the author here in order to then display a quote from this author the user requested
	console.log(userArr.user[0]);
	res.render("index.ejs", {quote: data.quotes})


});


app.use(function(req, res, next){
res.redirect('/');
});
