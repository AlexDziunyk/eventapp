import React, { useState, useRef } from 'react';
import './style.scss';

const SettingsPage = () => {
  const [organizationImage, setOrganizationImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [profileName, setProfileName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [organizationDescription, setOrganizationDescription] = useState('');
  const [isOrganization, setIsOrganization] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      organizationImage,
      profileImage,
      name: isOrganization ? organizationName : profileName,
      username,
      email,
      password,
      notification,
      description: organizationDescription
    });
  };

  const handleUpgrade = () => {
    setIsOrganization(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      document.getElementById('imageInput').style.backgroundImage = `url('${imageDataUrl}')`;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="settings-page">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="imageInput">Profile Image:</label>
          <input type="file" id="imageInput" onChange={handleFileChange} style={{ display: 'none' }} />
          <label htmlFor="imageInput" className="image-input-label">
            Choose File
          </label>
          {profileImage && (
            <div className="preview-image" style={{ backgroundImage: `url(${URL.createObjectURL(profileImage)})` }}></div>
          )}
        </div>
        {isOrganization ? (
          <>
            <div className="form-group">
              <label htmlFor="organizationName">Organization Name:</label>
              <input type="text" id="organizationName" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="profileName">Profile Name:</label>
              <input type="text" id="profileName" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
            </div>
          </>
        )}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="notification">Notification:</label>
          <input type="checkbox" id="notification" checked={notification} onChange={(e) => setNotification(e.target.checked)} />
        </div>
        <div className="form-group">
          <label htmlFor="organizationDescription">Organization Description:</label>
          <textarea id="organizationDescription" value={organizationDescription} onChange={(e) => setOrganizationDescription(e.target.value)}></textarea>
        </div>
        {!isOrganization && (
          <div className="form-group">
            <button type="button" onClick={handleUpgrade}>Upgrade to Organization</button>
          </div>
        )}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;
