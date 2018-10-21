const express = require('express');
const {Interface} = require('./model');

var interface = new Interface();

const app = express.Router();

// allow JSON parsing 
app.use(express.json());

app.get("/", function(req, res){
    res.send({...interface});
});

// Get List of all Users

app.get('/app/users', (req, res) => {
	res.send(interface.users);
});

// Display Individual User Data

app.get('/app/users/:id', (req, res) => {

	const user = interface.users.find(u => u.id === parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
	res.send(user);
});

// Add new User

app.post('/app/users', (req, res) => {

	if(!req.body.email || !req.body.f_name || !req.body.l_name || !req.body.age || !req.body.height || !req.body.gender) {
		// 400 Bad Request
		res.status(400).send('Sorry, Something seems to be missing');
		return;
	};

	const user = {
		id: interface.users.length + 1,
		f_name: req.body.f_name,
		l_name: req.body.l_name,
		age: req.body.age,
		height: req.body.height,
		gender: req.body.gender,
		email: req.body.email,
		profileImage: '',
		pictures: [],
		friends: [],
		posts: []	
	};

	interface.addUser(user);
	res.send(user);	
});

// Update User information

app.put('/app/users/:id', (req, res) => {

	const user = users.find(u => u.id === parseInt(req.params.id));
	if(!user) res.status(404).send('Sorry, This User Does Not Exist');

	if(!req.body.email || !req.body.f_name || !req.body.l_name || !req.body.age || !req.body.height || !req.body.gender) {
	// 400 Bad Request
	res.status(400).send('Sorry, Something seems to be missing');	
	return;
	};

	user.f_name = req.body.f_name;
	user.l_name = req.body.l_name;
	user.age = req.body.age;
	user.height = req.body.height;
	user.gender = req.body.gender;
	user.email = req.body.email;

	res.send(user);	
	
});

// Delete User

app.delete('/app/users/:id', (req, res) => {

	const user = interface.users.find(u => u.id === parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	const index = interface.users.indexOf(user);
	interface.users.splice(index, 1);

	res.send(user);
	
});

// Get All Friends

app.get('/app/users/:id/friends', (req, res) => {
	
	const results = [];
	const user = users.find(u => u.id === parseInt(req.params.id));

	for(var i=0;i<user.friends.length-1;i++){
		const friend = users.find(u => u.id === (user.friends[i]));
		results.push(JSON.stringify({f_name: friend.f_name, l_name: friend.l_name, profileImage: friend.profileImage}));
	}
	res.send(results);
});

// Add a Friend

app.put('/app/users/:id/friends', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	user.friends.push(req.body.id);
	
	res.send(user);	
});

// Remove a Friend

app.delete('/app/users/:id/friends', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	const index = user.friends.indexOf(req.body.id);
	if (index > -1) {
		friends.splice(index, 1);
	}

	res.send(user.friends);
	
});

// Post message

app.post('/app/users/:id/posts', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    var d = new Date();
    
    interface.user.post.push(json.stringify({message: req.body.message, date: d.getTime(), sentBy: parseInt(req.params.id), privacy: req.body.privacy, id: user.posts.length + 1}));
});



// Add Exercise

app.post

// Update Exercise

// Delete Exercise

// Get all Pictures

// Add Picture

// Remove Picture

// Update Picture

module.exports = app;