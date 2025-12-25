
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters long')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}


import { PasswordHistory } from '@/models/PasswordHistory';
import dbConnect from '@/lib/mongoose';

export async function isPasswordInHistory(userId: string, newPassword: string): Promise<boolean> {
  await dbConnect();
  const history = await PasswordHistory.find({ userId })
    .sort({ createdAt: -1 })
    .limit(5);

  for (const record of history) {
    const isMatch = await bcrypt.compare(newPassword, record.passwordHash);
    if (isMatch) return true;
  }

  return false;
}

export async function addToPasswordHistory(userId: string, passwordHash: string) {
  await dbConnect();
  await PasswordHistory.create({
      userId,
      passwordHash
  });

  // Optional: Clean up old history (keep only last 5)
  // Get all history
  const allHistory = await PasswordHistory.find({ userId }).sort({ createdAt: -1 });
  
  if (allHistory.length > 5) {
     const toDelete = allHistory.slice(5);
     const idsToDelete = toDelete.map(h => h._id);
     await PasswordHistory.deleteMany({ _id: { $in: idsToDelete } });
  }
}
