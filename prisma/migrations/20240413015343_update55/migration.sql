/*
  Warnings:

  - You are about to drop the column `bookId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Review` table. All the data in the column will be lost.
  - Added the required column `reviewId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "bookListId" TEXT,
    CONSTRAINT "Review_bookListId_fkey" FOREIGN KEY ("bookListId") REFERENCES "BookList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("author", "createdAt", "description", "genre", "id", "title", "updatedAt", "userId") SELECT "author", "createdAt", "description", "genre", "id", "title", "updatedAt", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
