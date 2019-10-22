const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let adminSchema = new Schema({
    name: {
        first: { type: String, trim: true },
        last: { type: String, trim: true },
    },
    photoId: {
        idType: String,
        idNo: String
    },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    phone: { type: String, trim: true },
    address: { type: String, trim: true },
    dob: {
        type: Date, required: true
    },
    role: {
        type: String,
        enum: ['Coffee', 'Tea']
    },
    profileImage: Buffer
});

module.exports = mongoose.model('Admin', adminSchema);