/*
  Warnings:

  - Added the required column `author` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "content" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("bookId", "content", "createdAt", "id", "rating", "updatedAt", "userId") SELECT "bookId", "content", "createdAt", "id", "rating", "updatedAt", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE UNIQUE INDEX "Review_slug_key" ON "Review"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
