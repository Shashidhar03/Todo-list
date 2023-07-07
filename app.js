const bodyParser = require('body-parser');
const express=require('express');
const app=express();

var items=[];
var workitems=[];
app.set('view engine','ejs')
app.listen(3000);

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("public"));

app.get("/",function(req,res)
{
    var date=new Date();
    var day=date.toLocaleDateString();
    res.render("view",{kindofday:day, add :items});
    
});

app.post('/',function(req,res)
{
    console.log(req.body.data);
    item=req.body.data;
    items.push(item);
    res.redirect("/");
})

app.get('/work',function(req,res)
{
    res.render('work',{add: workitems});
})

app.post('/work',function(req,res)
{
    workitems.push(req.body.data);
    res.redirect('/work');
})