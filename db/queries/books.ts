import type { Book } from "@prisma/client";
import { db } from "@/db";

export type BookWithData = Book & {
    bookshelfCount: number;
    
};