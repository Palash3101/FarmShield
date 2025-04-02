import React, { useState } from 'react';
import '../styles/ProfilePage.css'; // Assuming you'll create this CSS file

const ProfileProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123465789',
    bio: 'Software developer with 5 years of experience in web technologies.',
    profileImage: null,
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    theme: 'light'
  });

  const [isEditing, setIsEditing] = useState(false);

  function handleInputChange(event) {
    console.log(event.target.name, event.target.value);
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="profile-card">
    <div className="profile-header">
        <h1 className="profile-title">User Profile</h1>

        <button 
        onClick={() => setIsEditing(!isEditing)} 
        className={isEditing ? "button save-button" : "button edit-button"}
        >
        {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
    </div>
    
    <div className="profile-content">

        <div className="profile-image-section">
        <div className="profile-image-container">
            {profile.profileImage ? (
            <img src={profile.profileImage} alt="Profile" className="profile-image" />
            ) : (
            <div className="profile-image-placeholder">
                {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
            </div>
            )}
        </div>
        
        {isEditing && (
            <label className="image-upload-button">
            Change Photo
            <input 
                type="file" 
                accept="image/*" 
                className="hidden-input" 
            />
            </label>
        )}
        </div>

        <div className="profile-details">
        <div className="profile-form-grid">
            <div className="form-group">
            <label className="form-label">First Name</label>
            {isEditing ? (
                <input
                type="text"
                name="firstName"
                value={profile.firstName}
                className="form-input"
                onChange={handleInputChange}  
                />
            ) : (
                <p className="form-value">{profile.firstName}</p>
            )}
            </div>
            
            <div className="form-group">
            <label className="form-label">Last Name</label>
            {isEditing ? (
                <input
                type="text"
                name="lastName"
                value={profile.lastName}
                className="form-input"
                onChange={handleInputChange}  
                />
            ) : (
                <p className="form-value">{profile.lastName}</p>
            )}
            </div>
            
            <div className="form-group">
            <label className="form-label">Email</label>
            {isEditing ? (
                <input
                type="email"
                name="email"
                value={profile.email}
                className="form-input"
                onChange={handleInputChange}  
                />
            ) : (
                <p className="form-value">{profile.email}</p>
            )}
            </div>
            
            <div className="form-group">
            <label className="form-label">Phone</label>
            {isEditing ? (
                <input
                type="tel"
                name="phone"
                value={profile.phone}
                className="form-input"
                onChange={handleInputChange}  
                />
            ) : (
                <p className="form-value">{profile.phone}</p>
            )}
            </div>
        </div>
        
        <div className="form-group bio-group">
            <label className="form-label">Bio</label>
            {isEditing ? (
            <textarea
                name="bio"
                value={profile.bio}
                rows="3"
                className="form-textarea"
                onChange={handleInputChange}  
            />
            ) : (
            <p className="form-value">{profile.bio}</p>
            )}
        </div>
            
        </div>
        </div>
    </div>

  );
};

export default ProfileProfile;