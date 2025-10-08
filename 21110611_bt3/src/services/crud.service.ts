import User from '../models/user.model.ts';
import type { IUser } from '../models/user.model.ts';

export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  const user = new User(data);
  return user.save();
};

export const getAllUsers = async (): Promise<IUser[]> => {
  return User.find().sort({ createdAt: -1 }).exec();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id).exec();
};

export const updateUser = async (id: string, data: Partial<IUser>): Promise<IUser | null> => {
  return User.findByIdAndUpdate(id, data, { new: true, runValidators: true }).exec();
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return User.findByIdAndDelete(id).exec();
};
