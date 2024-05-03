import React, { useState, useEffect } from 'react';
import './style.scss'; 
const CompanyItem = ({ companyData }) => {
    const [organizationImage, setOrganizationImage] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [organizationDescription, setOrganizationDescription] = useState('');
    const [usersInCompany, setUsersInCompany] = useState([]);
  
    useEffect(() => {
      const getUsersInCompany = async () => {
        try {
          const response = await fetch(''); // ТУТ ПОВИННО БУТИ API_URL
          const data = await response.json();
          setUsersInCompany(data.users); 
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      getUsersInCompany();
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
        organizationImage,
        name: organizationName,
        description: organizationDescription
      });
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setOrganizationImage(file);
  
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        document.getElementById('organizationImageInput').style.backgroundImage = `url('${imageDataUrl}')`;
      };
      reader.readAsDataURL(file);
    };
  
    return (
      <div className="company-item">
        <h2>Company Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="organizationImageInput">Company Image:</label>
            <input type="file" id="organizationImageInput" onChange={handleFileChange} style={{ display: 'none' }} />
            <label htmlFor="organizationImageInput" className="image-input-label">
              Choose File
            </label>
            {organizationImage && (
              <div className="preview-image" style={{ backgroundImage: `url(${URL.createObjectURL(organizationImage)})` }}></div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="organizationName">Company Name:</label>
            <input type="text" id="organizationName" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="organizationDescription">Company Description:</label>
            <textarea id="organizationDescription" value={organizationDescription} onChange={(e) => setOrganizationDescription(e.target.value)}></textarea>
          </div>
          <button type="submit">Save Changes</button>
        </form>
        <div className="users-in-company">
          <h3>Users in Company</h3>
          <ul>
            {usersInCompany.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default CompanyItem;