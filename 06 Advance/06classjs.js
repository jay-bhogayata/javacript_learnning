class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    #courseList = []

    getInfo(){
        return {name : this.name , email: this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name)
    }

    gteCorseList(){
        return this.#courseList;
    }

        static login(){
        return "You are logged in";
    }
}

class SubAdmin extends User{

    constructor(name , email){
        super(name , email);
    }

    getAdminInfo(){
        return "i am sub admin"
    }

    login(){
        return "method overriding"
    }
}





module.exports  =  User;


const rock = new User("rock" , "rock@rock.com")

console.log(rock.getInfo());
rock.enrollCourse("anguler js")
console.log(rock.gteCorseList());
console.log(rock.courseList); // using # this is undefind  now courseList become private prop

// geeters and setters

// static is not inherted by chaild

const tom = new SubAdmin("tom" , "tom@jarry.com");

console.log(tom);
console.log(tom.login());
