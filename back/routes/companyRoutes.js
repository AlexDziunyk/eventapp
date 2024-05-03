const express = require('express');
const router = express.Router();

const { createCompany, getAllCompanies, getCompanyById, updateCompany, deleteCompany } = require('../controllers/companyController');

router.post('/createCompany', createCompany);
router.get('/getAllCompanies', getAllCompanies);
router.get('/getCompanyById/:companyId', getCompanyById);
router.put('/updateCompany/:companyId', updateCompany);
router.delete('/deleteCompany/:companyId', deleteCompany);

module.exports = router;
