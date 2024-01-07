class Person {
  constructor(
    name = "Revathi",
    mailId = "revathimohancse@gmail.com",
    phno = 9876543210,
    location = "namakkal",
    Gender = "Female",
    Nationality = "Indian",
    LinguisticProficiency = "Tamil & English",
    tenthpercentage = 97,
    twelthpercentage = 80,
    Degree = "B.E-COMPUTER SCIENCE and ENGINEERING",
    passedout = 2010,
    degreepercentage = 79,
    hobbies = "reading books,gardening"
  ) {
    this.name = name;
    this.mailId = mailId;
    this.phno = phno;
    this.location = location;
    this.Gender = Gender;
    this.Nationality = Nationality;
    this.LinguisticProficiency = LinguisticProficiency;
    this.tenthpercentage = tenthpercentage;
    this.twelthpercentage = twelthpercentage;
    this.Degree = Degree;
    this.passedout = passedout;
    this.degreepercentage = degreepercentage;
    this.hobbies = hobbies;
  }
}

const person1 = new Person();
console.log(person1);
