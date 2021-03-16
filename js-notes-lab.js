// 7.2
user = {
    firstName: 'Fred',
    lastName: 'Lu',

    get fullName() {

    },

    set fullName(name) {
        [this.firstName, this.lastName] = (name + '').split(' ');
    }

};

console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);

user.fullName = "Terry Wu";
console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);