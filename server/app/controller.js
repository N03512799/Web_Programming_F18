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

    if(!req.body.email || !req.body.password || !req.body.f_name || !req.body.l_name || !req.body.gender) {
		// 400 Bad Request
		res.status(400).send('Sorry, Something seems to be missing');
		return;
    };   
	const user = interface.addUser(req.body.f_name, req.body.l_name, req.body.gender, req.body.email, req.body.password);
	res.send(user);	
});

// Update User information

app.put('/app/users/:id', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    
    if(!user) res.status(404).send('Sorry, This User Does Not Exist');
	if(!req.body.email || !req.body.password || !req.body.f_name || !req.body.l_name || !req.body.age || !req.body.height || !req.body.gender) {
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
    user.password = req.body.password;

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
	
	res.send(user.friends);	
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
    
    interface.user.post.push(json.stringify({message: req.body.message, date: d.getTime(), sentBy: parseInt(req.params.id), privacy: req.body.privacy, postID: user.posts.length + 1, status: 'New'}));
});

// Update Message

app.put('/app/users/:id/posts', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    const index = user.post.indexOf(req.body.post);
    var d = Date();

        if(index > -1){
            user.posts[index].message = req.body.message;
            user.posts[index].date = d.getTime();
            user.posts[index].privacy = req.body.message;
            user.posts[index].status = 'Edited';
        };

    res.send(user.posts);
});

// Delete Message

app.delete('/app/users/:id/posts', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    const index = 0;

    while(index<user.posts.length){
        if(user.posts[index].postID == req.body.postID){
            break;
        };
            index = index + 1; 
    };
    if(index < user.post.length){
        user.post.splice(index, 1);
    }
    res.send(user.posts);
});
// Get All Messages

app.get('/app/users/:id/posts', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    res.send(user.posts);

});

// Add Exercise

app.post('/app/users/:id/exercises', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    user.exercises.push(json.stringify({exerciseID: req.body.exerciseID, reps: [], sets: []}));

    res.send(user.exercises);
});


// Update Exercise

app.put('/app/users/:id/exercises', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    const index = user.exercises.indexOf(req.body.exerciseID);

    if(index>-1){
        user.exercise[index].reps.push(req.body.reps);
        user.exercise[index].sets.push(req.body.sets);
    };

    res.send(user.exercises)
});

// Delete Exercise

app.put('/app/users/:id/exercises', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    const index = user.exercises.indexOf(req.body.exerciseID);

    if(index > -1) user.exercises.splice(index, 1);
    else return res.status(400).send('Sorry, the exercise does not exist');

    res.send(user.exercises);
});
// Get all Pictures

app.get('/app/users/:id/pictures', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
});

// Add Picture

app.post('/app/users/:id/pictures', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    if (!req.body.url) return res.status(400).send('Please Include a Picture');

    user.pictures.push(json.stringify({url: req.body.url, photoID: user.pictures.length +1, isProfile: req.body.isProfile, privacy: req.body.privacy}));
    
    res.send(user.pictures);
});

// Remove Picture

app.delete('/app/users/:id/pictures', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');

    if (!req.body.picture) return res.status(400).send('No Photo Selected');

    const index = user.pictures.indexOf(req.body.picture);

    if (index > -1) user.pictures.splice(index, 1);
    else return res.status(400).send('Picture not found');

    res.send(user.pictures);
});
// Update Picture

app.put('/app/users/:id/pictures', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if(!user) return res.status(404).send('Sorry, This User Does Not Exist');
    if (!req.body.picture) return res.status(400).send('No Picture Selected');

   const index = user.pictures.indexOf(req.body.picture);

   if(index>-1) {
        user.pictures[index].privacy = req.body.privacy;
        user.pictures[index].isProfile = req.body.isProfile;
   }
   else return res.status(400).send('Picture not found');
    
    res.send(user.pictures);
});

module.exports = app;
