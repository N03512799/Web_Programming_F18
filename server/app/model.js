class Interface{

    constructor() {
		this.users = [];
		this.userCount = 0;
		this.currentUser = '';
    }

    	addUser(f_name, l_name, gender, email, password) {
       		this.users.push(new User(this.setID(), f_name, l_name, gender, email, password));
	}

	findUser(id){
		return this.users.find(u => u.id === id);
	}
	
	setID() {
		return this.count++;
	}

	checkLogIn(email, password){
		const user = this.users.find(u => u.email === email);
		if(!user) return -1;
		if(user.password == password){ 
			this.currentUser = user;	
			return user.id;
		} 
	}
}

class User {
	
	constructor(id, f_name, l_name, gender, email, password) {
		id: id;
		f_name: f_name;
		l_name: l_name;
		age: '';
		height: '';
		password: password;
		gender: gender;
		email: email;
		profileImage: '';
		privacy: 'public';
		pictures: [];
        friends: [];
        exercises: [];
		posts: [];
		postCount: 0;
		pictureCount: 0;	
	};

	setPostID(){
		return this.postCount++;
	};

	addPost(message, sentTo, sentBy, privacy){
		this.posts.push(new Post(message, sentTo, sentBy, privacy, this.setPostID()));

	};

	setPicID(){
		return this.pictureCount++;
	}

	addPicture(url, privacy, isProfile){
		this.pictures.post(new Picture(url, privacy, isProfile, this.setPicID()));
	}

	addExercise(id){
		this.exercises.push(new Exercise(id));
	};

	
}

class Post {

	constructor(message, sentTo, sentBy, privacy, postID){
		message: message;
		date: Date().getTime();
		sentTo: sentTo;
		sentBy: sentBy;
		postID: postID;
		status: 'New';
	};

	update(message, privacy){
		this.message = message;
		this.date = Date().getTime();
		this.privacy = privacy;
		this.status = 'Edited';	
	};
}

class Exercise {

	constructor(id){
		this.id = id;
		this.tracker = [];
		this.weight = 0;
	};

	update(reps, sets){
		this.tracker.push(new CompletedExercise(reps, sets, this.weight));
	}

	addWeight(weight){
		this.weight = weight;
	}
}

class CompletedExercise {

	constructor(reps, sets, weight){
		this.reps = rep;
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
    Interface, User, Post, Exercise, CompletedExercise, Picture
}