import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import {  priorities, statuses } from "./data";

const books = Array.from({ length: 100 }, () => ({
  id: `BOOK-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  author: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  // label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
  // year: faker.date.past().getFullYear(),
}));

fs.writeFileSync(
  path.join(__dirname, "books.json"),
  JSON.stringify(books, null, 2)
);

console.log("✅ Books data generated.");
