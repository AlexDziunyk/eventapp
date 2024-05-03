const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    profilename: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    confirmationToken: { type: String },
    confirmed: { type: Boolean, default: false },
    events: [{ type: Schema.Types.ObjectId, ref: 'event' }],
    role: [{ type: String, enum: ['company']}],
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
