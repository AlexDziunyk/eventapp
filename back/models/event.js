const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: { type: String, required: true },
  companyEmail: { type: String, required: true },
  location: { type: String, required: true },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
