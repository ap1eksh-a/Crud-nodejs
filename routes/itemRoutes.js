import express from 'express';
const router = express.Router();
import { viewItemsController, viewItemDetailsController, addCommentController } from '../controllers/itemController.js';

router.get('/items', viewItemsController);
router.get('/items/:id', viewItemDetailsController);
router.post('/items/comment', addCommentController);

export default router;
