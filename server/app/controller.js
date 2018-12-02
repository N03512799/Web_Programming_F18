const express = require('express');
const {API, User} = require('./model');
const bodyParser = require('body-parser');

var api = new API();

const app = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// allow JSON parsing 
app.use(express.json());

app.get("/", function(req, res){
	res.send({...api});
	console.log("success");
});

// Log In Request

app.post('/login', (req, res) => {
	if(!req.body.email || !req.body.password) return res.status(400).send('Sorry, something is missing');

	const result = api.checkLogin(req.body.email, req.body.password);
	if(result>-1) return res.send(api.findUser(result));
	else return res.status(404).send('User not Found');

});

// Get List of all Users

app.get('/users', urlencodedParser, (req, res) => {
	res.send(api);
});

// Display Individual User Data

app.get('/users/:id', (req, res) => {

	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
	
	res.send(user);
});

// Add new User

app.post('/users', urlencodedParser, (req, res) => {
	res.send(req.body);	
//	const user = api.addUser(req.body.f_name, req.body.l_name, req.body.gender, req.body.email, req.body.password);
//	res.send(user);	
})

// Update User information

app.put('/users/:id', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
    
    if(!user) res.status(404).send('Sorry, This User Does Not Exist');
	if(!req.body.email || !req.body.privacy || !req.body.password || !req.body.f_name || !req.body.l_name || !req.body.age || !req.body.height || !req.body.gender) {
	// 400 Bad Request
	res.status(400).send('Sorry, Something seems to be missing');	
	return;
	}

	user.f_name = req.body.f_name;
	user.l_name = req.body.l_name;
	user.age = req.body.age;
	user.height = req.body.height;
	user.gender = req.body.gender;
	user.email = req.body.email;
	user.password = req.body.password;
	user.privacy = req.body.privacy;

	res.send(user);	
	
});

// Delete User

app.delete('/users/:id', (req, res) => {

	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	const index = api.users.indexOf(user);
	api.users.splice(index, 1);

	res.send(user);
	
});

// Get All Friends

app.get('/users/:id/friends', (req, res) => {
	
	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	res.send(user.friends);
});

// Add a Friend

app.put('/users/:id/friends', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	user.friends.push(req.body.id);
	
	res.send(user.friends);	
});

// Remove a Friend

app.delete('/users/:id/friends', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	const index = user.friends.indexOf(req.body.id);
	if (index > -1) {
		user.friends.splice(index, 1);
	}

	res.send(user.friends);
	
});

// Post Message

app.post('/users/:id/posts', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
	if(!req.body.message || !req.body.privacy) return res.status(400).send('Sorry, Something is missing.');
	user.addPost(req.body.message, req.body.sentTo, parseInt(req.params.id), req.body.privacy);
    res.send(user.posts);
});

// Update Message

app.put('/users/:id/posts', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    const index = user.posts.find(p => p.postID === req.body.postID);
	
	if (index>-1){user.posts[index].update(req.body.message, req.body.privacy);}
	else return res.status(404).send('Sorry, message does not exist');	

    res.send(user.posts);
});

// Delete Message

app.delete('/users/:id/posts', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    var index = 0;

while(index<user.posts.length){
        if(user.posts[index].postID == req.body.postID){ break;}
        index = index + 1; 
    }
    if(index < user.posts.length){
        user.posts.splice(index, 1);
	}
    res.send(user.posts);
});
// Get All Messages

app.get('/users/:id/posts', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
	res.send(user.posts);

});

// Add Exercise

app.post('/users/:id/exercises', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));	
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
	if(!req.body.exerciseID) return res.status(400).send('Sorry, no Exercise Selected');
    
	user.addExercise(req.body.exerciseID);

    res.send(user.exercises);
});


// Update Exercise

app.put('/users/:id/exercises', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    const index = user.exercises.indexOf(req.body.exerciseID);

    if(index>-1) {user.exercises[index].update(req.body.reps, req.body.sets)}
    else return res.status(400).send('Sorry, the exercise does not exist');	

    res.send(user.exercises)
});

// Delete Exercise

app.put('/users/:id/exercises', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    const index = user.exercises.indexOf(req.body.exerciseID);

    if(index > -1) user.exercises.splice(index, 1);
    else return res.status(400).send('Sorry, the exercise does not exist');

    res.send(user.exercises);
});

// Get all Pictures

app.get('/users/:id/pictures', (req, res) => {
	const user = api.findUser(parseInt(req.params.id));
	if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

	res.send(user.pictures);

});

// Add Picture

app.post('/users/:id/pictures', (req, res) => {
    const user = api.findUser(parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    if (!req.body.url) return res.status(400).send('Please Include a Picture');

    user.addPicture(req.body.url, req.body.privacy, req.body.isProfile);
    
    res.send(user.pictures);
});

// Remove Picture

app.delete('/users/:id/pictures', (req, res) => {
    const user = api.findUser(parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    if (!req.body.picture) return res.status(400).send('No Photo Selected');

    const index = user.pictures.indexOf(req.body.picture);

    if (index > -1) user.pictures.splice(index, 1);
    else return res.status(400).send('Picture not found');

    res.send(user.pictures);
});
// Update Picture

app.put('/users/:id/pictures', (req, res) => {
    const user = api.findUser(parseInt(req.params.id));
    
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
    if (!req.body.picture) return res.status(400).send('No Picture Selected');

   const index = user.pictures.indexOf(req.body.picture);

   if(index>-1) {
        user.pictures[index].update(req.body.privacy, req.body.isProfile);
   }
   else return res.status(404).send('Picture not found');
    
    res.send(user.pictures);
});

module.exports = app;
