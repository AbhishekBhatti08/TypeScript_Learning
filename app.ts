// console.log('Your code goes here...');

enum Role {ADMIN, READ_ONLY, AUTHOR, USER}

const persons= {
    name: "Abhishek",
    age: 32,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR
}

if (persons.role=== Role.AUTHOR) {
    console.log("Author")
}