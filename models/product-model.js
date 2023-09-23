import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    creatorId: {
        type: String,
        require: true
    },
    categoryId: {
        type: String
    }
}, {
    // created_at ~ updated_at
    timestamps: true
});

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;