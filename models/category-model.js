import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    creatorId: {
        type: String,
        require: true
    }
}, {
    // created_at ~ updated_at
    timestamps: true
});

const CategoryModel = mongoose.model('Category', categorySchema);
export default CategoryModel;