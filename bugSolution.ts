function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterImproved(person: string): string {
  if (typeof person !== 'string') {
    throw new Error('Parameter must be a string');
  }
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//console.log(greeter(user));

let userName = "Jane Doe";
console.log(greeter(userName));
console.log(greeterImproved(userName));

try {
  console.log(greeterImproved(user));
} catch (error) {
  console.error(error);
}

//Alternative using type guards
function isString(value: any): value is string {
    return typeof value === 'string';
}

function greeterTypeGuard(person: string | string[]): string {
    if (isString(person)) {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' ');
    }
}
console.log(greeterTypeGuard(userName));
console.log(greeterTypeGuard(user));