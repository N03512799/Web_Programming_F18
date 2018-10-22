
class Interface{

    constructor() {
		this.users = [];
		this.count = 0;
    }

    addUser(f_name, l_name, gender, email, password) {
       this.users.push(new User(this.setID(), f_name, l_name, gender, email, password));
	}
	
	setID() {
		return this.count++;
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
		pictures: [];
        friends: [];
        exercises: [];
		posts: [];	
	};
}
module.exports = {
    Interface, User
}