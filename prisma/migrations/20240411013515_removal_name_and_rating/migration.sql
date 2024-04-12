/*
  Warnings:

  - You are about to drop the column `rating` on the `Review` table. All the data in the column will be lost.

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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    "bookId" TEXT,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("author", "bookId", "createdAt", "description", "genre", "id", "slug", "title", "updatedAt", "userId") SELECT "author", "bookId", "createdAt", "description", "genre", "id", "slug", "title", "updatedAt", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE UNIQUE INDEX "Review_slug_key" ON "Review"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
