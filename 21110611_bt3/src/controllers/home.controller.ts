import type { Request, Response } from 'express';
import * as CRUDService from '../services/crud.service.ts';

export const getHomePage = (req: Request, res: Response): void => {
  res.render('crud');
};

export const postCreateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    await CRUDService.createUser(req.body);
    res.redirect('/users');
  } catch (err: any) {
    console.error(err);
    res.status(400).send('Error creating user: ' + (err.message || err));
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await CRUDService.getAllUsers();
  res.render('users/findAllUser', { users });
};

export const getEditUser = async (req: Request, res: Response): Promise<void> => {
  const user = await CRUDService.getUserById(req.params.id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  res.render('users/updateUser', { user });
};

export const postUpdateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    await CRUDService.updateUser(req.params.id, req.body);
    res.redirect('/users');
  } catch (err: any) {
    console.error(err);
    res.status(400).send('Error updating user: ' + (err.message || err));
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    await CRUDService.deleteUser(req.params.id);
    res.redirect('/users');
  } catch (err: any) {
    console.error(err);
    res.status(500).send('Error deleting user: ' + (err.message || err));
  }
};
