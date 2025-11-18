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



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}



const getUniqueValues = <T extends string | number>(array1: T[], array2: T[]): T[] => {
  const result: T[] = [];

  for (const item of array1) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  for (const item of array2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
};



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  const totals = products.map(p => {
    const totalPrice = p.price * p.quantity;
    const discountAmount = p.discount ? (totalPrice * p.discount) / 100 : 0;
    return totalPrice - discountAmount;
  });

  return totals.reduce((sum, item) => sum + item, 0);
};
