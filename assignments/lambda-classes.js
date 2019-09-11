// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
    // favSubjects is an array
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grade > 70) console.log(`${this.name} successfully graduated!`);
    else console.log(`${this.name} needs a higher grade to graduate!`);
  }
}

class ProjectManager extends Instructor {
  constructor(args) {
    super(args);
    this.gradClassName = args.gradClassName;
    this.favInstructor = args.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announes to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// TESTS
const Cersei = new Instructor({
  name: "Cersei",
  age: 30,
  location: "King's Landing",
  specialty: "drinking wine",
  favLanguage: "English",
  catchPhrase: "The Lannisters always pay their debts"
});
const Ygritte = new Instructor({
  name: "Ygritte",
  age: 19,
  location: "Beyond the Wall",
  favLanguage: "English",
  specialty: "being hot",
  catchPhrase: "You know nothing, Jon Snow"
});

const Melissa = new Student({
  name: "Melissa",
  age: 48,
  location: "Idaho Falls",
  previousBackground: "IT networking and bench tech",
  className: "WEB23",
  grade: 100,
  favSubjects: ["coding", "illustration", "painting", "Photoshop"]
});

const Buffy = new Student({
  name: "Buffy",
  age: "17",
  location: "Sunnydale",
  previousBackground: "vampire slayer",
  className: "WEB27",
  grade: 68,
  favSubjects: ["vampire lore", "demon battle", "Spike vs. Angel"]
});

const Sansa = new ProjectManager({
  name: "Sansa",
  age: 18,
  location: "Winterfell",
  specialty: "Javascript",
  favLanguage: "English",
  catchPhrase: "Oh, wait. I just realized I don't care.",
  gradClassName: "WEB18",
  favInstructor: "Ygritte"
});

const Arya = new ProjectManager({
  name: "Arya",
  age: 13,
  location: "Braavos",
  specialty: "asassain",
  favLanguage: "English",
  catchPhrase: "Stick them with the pointy end",
  gradClassName: "WEB1",
  favInstructor: "Cersei"
});

Cersei.speak();
Cersei.demo("espionage");
Cersei.grade(Melissa, "Python");
Ygritte.speak();
Ygritte.demo("stealth");
Ygritte.grade(Melissa, "LESS");

Melissa.listsSubjects();
Melissa.PRAssignment("Python");
Melissa.sprintChallenge("JS IV");
Melissa.graduate();
Buffy.listsSubjects();
Buffy.PRAssignment("CSS");
Buffy.sprintChallenge("Hellmouths");
Buffy.graduate();

Sansa.demo("HTML");
Sansa.grade(Buffy, "CSS");
Sansa.standUp("WEB18");
Sansa.debugsCode(Melissa, "Python");
Arya.demo("LESS");
Arya.grade(Melissa, "preproccesing");
Arya.standUp("WEB190");
Arya.debugsCode(Buffy, "CSS");
