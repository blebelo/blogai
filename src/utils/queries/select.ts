import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { SelectUser, usersTable } from '@/db/schema';

export async function getUserByEmail(email: SelectUser['email']): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
    password: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.email, email));
}
