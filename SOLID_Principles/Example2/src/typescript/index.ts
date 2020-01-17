class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  printName(): void {
    console.log(this.name);
  }
}

const person = new Person('ntando');
person.printName();
