import { db } from '../../db';
import { InsertPost, InsertUser, postsTable, usersTable } from '@/db/schema';


// User Actions
export async function createDbUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
  return data;
}

// Blog Actions
export async function createPost(data: InsertPost) {
  await db.insert(postsTable).values(data);
}

