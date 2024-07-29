import ItemModel from '../models/itemSchema.js';

const viewItemsController = async (req, res) => {
    try {
        const items = await ItemModel.find({});
        res.render('viewItems', { items });
    } catch (error) {
        console.log(error.message);
    }
};

const viewItemDetailsController = async (req, res) => {
    try {
        const item = await ItemModel.findById(req.params.id);
        res.render('itemDetails', { item });
    } catch (error) {
        console.log(error.message);
    }
};

const addCommentController = async (req, res) => {
    try {
        const { itemId, comment, rating } = req.body;
        const item = await ItemModel.findById(itemId);
        if (item) {
            item.comments.push({ body: comment, date: new Date() });
            item.rating = rating;
            await item.save();
            res.redirect(`/items/${itemId}`);
        } else {
            res.redirect('/items');
        }
    } catch (error) {
        console.log(error.message);
    }
};

export { viewItemsController, viewItemDetailsController, addCommentController };
