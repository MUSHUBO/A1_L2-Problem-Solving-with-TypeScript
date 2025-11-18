function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
}



function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type RatedItem = {
  title: string;
  rating: number;
};

const filterByRating = (value: RatedItem[]): RatedItem[] => {
  return value.filter(item => item.rating >= 4);
};



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}; 

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.isActive);
};
