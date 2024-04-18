import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";
import { genres } from "./data";

const books = Array.from({ length: 100 }, () => ({
  id: `BOOK-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  author: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  genre: faker.helpers.arrayElement(genres).value,
  // year: faker.number.int({ min: 300, max: 2022 }),
  // rating: faker.number.int({ min: 1, max: 5 }),
  // status: faker.helpers.arrayElement(statuses).value,
  // year: faker.date.past().getFullYear(),
  // label: faker.helpers.arrayElement(labels).value,
  // priority: faker.helpers.arrayElement(priorities).value,
}));

fs.writeFileSync(
  path.join(__dirname, "books.json"),
  JSON.stringify(books, null, 2)
);

console.log("✅ Books data generated.");
