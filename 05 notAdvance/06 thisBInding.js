// borrow methosd using bind

const jay = {
    firstName : "Jay",
    lastName : "bhogayta",
    role : "Admin",
    courseCount : 3,
    getInfo : function () {
        console.log(`
            first name is ${this.firstName}
            last name is ${this.lastName}
            his role is ${this.role}
            and he is studying ${this.courseCount} course
        
        
        `);
    }
}


const dj = {
    firstName : "Rock",
    lastName : "Dj",
    role : "sub-admin",
    courseCount : 4,
}

// jay.getInfo();
// dj.getInfo();

// var djinfo = jay.getInfo.bind(dj);
// djinfo();


jay.getInfo.call(dj);