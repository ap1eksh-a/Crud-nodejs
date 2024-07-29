import StudentModel from "../models/studentSchema.js";

const editController = async(req,res)=>{
    try {
        // console.log(req.params.id)
       const record = await StudentModel.findById({'_id':req.params.id})
        if(record){
            res.render('edit', {'record':record}) 
        }else{
            res.render('edit')
        }
    } catch (error) {
        console.log(error.message)
    }
}



// update controller
const updateController = async(req,res)=>{
    try {
     const updatedRecord =   await StudentModel.findByIdAndUpdate(req.params.id, req.body)
     if(updatedRecord){
        res.redirect('/')
     }else{
        res.redirect('read')
     }
    } catch (error) {
        console.log(error.message)
    }
}





// delete

const deleteController = async(req,res)=>{
    try {
      const deleterecord =   await StudentModel.findByIdAndDelete(req.params.id)
        if(deleterecord){
            res.redirect('/read')
        }else{
            res.redirect('/')
        }
      
    } catch (error) {
        
    }
}

const viewItemDetailsController = async (req, res) => {
    try {
        const item = await StudentModel.findById(req.params.id);
        res.render('itemDetails', { item });
    } catch (error) {
        console.log(error.message);
    }
};

const addCommentController = async (req, res) => {
    try {
        const { itemId, comment, rating } = req.body;
        const item = await StudentModel.findById(itemId);
        if (item) {
            item.comments.push({ body: comment, date: new Date() });
            item.rating = rating;
            await item.save();
            res.redirect(`/details/${itemId}`);
        } else {
            res.redirect('/read');
        }
    } catch (error) {
        console.log(error.message);
    }
};


export {addCommentController,editController,updateController,deleteController,viewItemDetailsController}