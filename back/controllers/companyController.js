const Company = require('../models/companyModel');
const User = require('../models/userModel');

exports.createCompany = async (req, res) => {
  try {
    const { companyName, email, location } = req.body;
    const newCompany = new Company({ companyName, email, location });
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const { companyName, email, location } = req.body;
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      { companyName, email, location },
      { new: true }
    );
    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json({ message: 'Company deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addUserToCompany = async (req, res) => {
    const { companyId, userId } = req.body;
  
    try {
      const company = await Company.findById(companyId);
      const user = await User.findById(userId);
  
      if (!company || !user) {
        return res.status(404).json({ error: 'Company or user not found' });
      }
  
      company.users.push(userId);
      await company.save();
  
      res.status(200).json({ message: 'User added to company successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};
  
exports.removeUserFromCompany = async (req, res) => {
    const { companyId, userId } = req.body;
  
    try {
      const company = await Company.findById(companyId);
      const user = await User.findById(userId);
  
      if (!company || !user) {
        return res.status(404).json({ error: 'Company or user not found' });
      }
  
      company.users.pull(userId);
      await company.save();
  
      res.status(200).json({ message: 'User removed from company successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};