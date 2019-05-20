// Object Destructuring

const person = {
  name: "Justin",
  age: 25,
  location: {
    city: "Seoul",
    temp: 20
  }
};

const { name, age } = person;

console.log(`${name} is ${age}`);

console.log(`It's in Seoul`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

// Array Destructuring

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [menu, small, medium, large] = item;

console.log(`a medium ${menu} costs ${medium}`);
