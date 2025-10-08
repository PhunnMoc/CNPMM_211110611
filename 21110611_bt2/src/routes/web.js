import express from 'express';
import * as homeController from '../controllers/homeController.js';
const router = express.Router();

router.get('/', homeController.getHomePage);
router.post('/users/create', homeController.postCreateUser);
router.get('/users', homeController.getUsers);
router.get('/users/:id/edit', homeController.getEditUser);
router.post('/users/:id/update', homeController.postUpdateUser);
router.get('/users/:id/delete', homeController.deleteUser);

export default router;
