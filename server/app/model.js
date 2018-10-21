
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

module.exports = {
    Interface
}