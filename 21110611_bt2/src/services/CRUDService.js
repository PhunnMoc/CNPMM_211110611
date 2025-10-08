import User from '../models/userModel.js';

export const createUser = async (data) => await User.create(data);

export const getAllUsers = async () => await User.find();

export const getUserById = async (id) => await User.findById(id);

export const updateUser = async (id, data) =>
  await User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = async (id) => await User.findByIdAndDelete(id);
