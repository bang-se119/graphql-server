import mongoose from "mongoose"

const creatorSchema = new mongoose.Schema({
    uid: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    }
}, {
    // created_at ~ updated_at
    timestamps: true
});

const CreatorModel = mongoose.model('Creator', creatorSchema);
export default CreatorModel;