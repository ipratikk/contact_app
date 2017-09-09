var express = require('express');
var app = express();
var mongojs =require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactList', function(req, res){
	console.log('I am getting a GET req');

	db.contactList.find(function(err, docs){
		res.json(docs);
	});
});

app.post('/contactList', function(req, res){
	db.contactList.insert(req.body, function(err, docs){
		res.json(docs);
	});
	console.log(req.body);
});

app.delete('/contactList/:id', function(req, res){
	var id=req.params.id;
	console.log(id);
	db.contactList.remove({_id: mongojs.ObjectId(id)}, function(err, docs){
		res.json(docs);
	});
});

app.listen(3000);
console.log('server online on 3000');
