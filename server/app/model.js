
class Interface{

    constructor() {
        this.users = []
    }

    addUser(user) {
       return this.users.push(user);
    }

    getUser(id){
        for(var i=0; i<this.users.length; i++){
            if(this.users[i].id == id){
                return this.users[i];
            }
        }
    }

}

class User{
    constructor(email, id){
        this.url = email;
        this.id = id;
        this.profile = {
            f_name: "",
            l_name: "",
            age: "",
            email: this.url,
        }
        this.badges = [];
        this.friends = [];
    }

    updateProfile({f_name, l_name, age}){
        this.profile.f_name = f_name;
        this.profile.l_name = l_name;
        this.profile.age = age;
    }

}

module.exports = {
    Interface, User
}