/*
  Warnings:

  - A unique constraint covering the columns `[reviewId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Book_reviewId_key" ON "Book"("reviewId");
