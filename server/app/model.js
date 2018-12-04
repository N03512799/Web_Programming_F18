class API{

    constructor() {
		this.users = [];
		this.userCount = 0;
    }

    addUser(f_name, l_name, gender, email, password) {
		if(this.users.find(u => u.email === email) === undefined){	
			const user = new User(this.setID(), f_name, l_name, gender, email, password)   
			this.users.push(user);
			return user;
		} else{
			return {id: -1};
		}
		
	}

	findUser(id){
		return this.users.find(u => u.id === id);
	}
	
	setID() {
		return this.userCount++;
	}

// Validates User login

	checkLogIn(email, password){
		const user = this.users.find(u => u.email === email);
		if(!user) return {id: -1};

		if(user.password === password) return user;
		else return {id: -2}; 
	}
}

class User {
	
	constructor(id, f_name, l_name, gender, email, password) {
		this.id = id;
		this.f_name = f_name;
		this.l_name = l_name;
		this.age = '';
		this.height = '';
		this.password = password;
		this.gender = gender;
		this.email = email;
		this.profileImage = '';
		this.privacy = 'public';
		this.pictures = [];
        this.friends = [];
        this.exercises = [];
		this.posts = [];
		this.postCount = 0;
		this.pictureCount = 0;	
	}

	setPostID(){
		return this.postCount++;
	}

	addPost(message, sentTo, sentBy, privacy){
		this.posts.push(new Post(message, sentTo, sentBy, privacy, this.setPostID()));

	}

	setPicID(){
		return this.pictureCount++;
	}

	addPicture(url, privacy, isProfile){
		this.pictures.post(new Picture(url, privacy, isProfile, this.setPicID()));
	}

	addExercise(id){
		this.exercises.push(new Exercise(id));
	}

	
}

class Post {

	constructor(message, sentTo, sentBy, privacy, postID){
		this.message = message;
		this.date = Date().getTime();
		this.sentTo = sentTo;
		this.sentBy = sentBy;
		this.postID = postID;
		this.privacy = privacy;
		this.status = 'New';
	}

	update(message, privacy){
		this.message = message;
		this.date = Date().getTime();
		this.privacy = privacy;
		this.status = 'Edited';	
	}
}

class Exercise {

	constructor(id){
		this.id = id;
		this.tracker = [];
		this.weight = 0;
	}

	update(reps, sets){
		this.tracker.push(new CompletedExercise(reps, sets, this.weight));
	}

	addWeight(weight){
		this.weight = weight;
	}
}

class CompletedExercise {

	constructor(reps, sets, weight){
		this.reps = reps;
		this.sets = sets;
		this.weight = weight;
		this.caloriesUsed = 0;
		this.date = Date().getTime();
	}
}

class Picture {

	constructor(url, privacy, isProfile, id){
		this.url = url;
		this.privacy = privacy;
		this.isProfile = isProfile;
		this.id = id;
		this.date = Date().getTime();	
	}

	update(privacy, isProfile){
		this.privacy = privacy;
		this.isProfile = isProfile;
	}
}

module.exports = {
    API, User, Post, Exercise, CompletedExercise, Picture
}