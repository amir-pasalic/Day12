var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "4568295761",
    likes: ["Python", "Swift", "R"],
  },

  {
    firstName: "Richard",
    lastName: "Roe",
    number: "6938257149",
    likes: ["React", "Angular", "Vue"],
  },

  {
    firstName: "Jane",
    lastName: "Roe",
    number: "unknown",
    likes: ["JavaScript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  for (var obj in contacts) {
    if (
      contacts[obj].firstName === name &&
      contacts[obj].hasOwnProperty(prop)
    ) {
      return contacts[obj][prop];
    }
  }
  for (var obj in contacts) {
    if (contacts[obj].firstName !== name) {
      return "No such contact";
    }
    if (!contacts[obj].hasOwnProperty(prop)) {
      return "No such property";
    }
  }
}

console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exsports = lookUpProfile;
