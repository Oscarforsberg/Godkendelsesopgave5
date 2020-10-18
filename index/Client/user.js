//definerer model klasse for vores user
class user {
    constructor(firstname, lastname, age, gender, match, image, interest){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.match = match;
        this.image = image;
        this.interest = interest;
  }
    match(){
        //match function
    }
}
//definerer model klasse for match
class match {
    constructor(firstname, lastname, age, gender, location){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.location = location;}
}

class image {
    constructor(path, height, width){
        this.path = path;
        this.height = height;
        this.width = width;}
}

class interest {
    constructor(sport, music, movies, food){
        this.sport = sport;
        this.music = music;
        this.movie = movies;
        this.food = food;}
    }


class freeuser extends user{
    constructor(firstname, lastname, age, gender, match, image, interest, ads){
        super (firstname, lastname, age, gender, match, image, interest, ads);
        this.ads = ads;}
    }

class paymentuser extends user{
    constructor(firstname, lastname, age, gender, match, image, interest, creditcard){
        super (firstname, lastname, age, gender, match, image, interest, creditcard);
        this.creditcard = creditcard;}
    }

//eksporter user

module.exports = [user, match, image, interest, freeuser, paymentuser];
