const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    confirmationToken: { type: String },
    confirmed: { type: Boolean, default: false },
    events: [{ type: Schema.Types.ObjectId, ref: 'event' }],
    role: [{ type: String, enum: ['company']}]
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
