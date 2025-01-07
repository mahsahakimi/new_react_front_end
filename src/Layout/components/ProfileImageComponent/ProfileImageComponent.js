import React, { useState } from 'react';

const ProfileImageComponent = () => {
  const [image, setImage] = useState('default-profile-pic.jpg');

  const handleClick = () => {
    document.getElementById('imageUpload').click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="profile-image-container">
      <img src={image} alt="Profile Picture" id="profileImage" className="profile-image" />
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <button className="upload-button" onClick={handleClick}>Change Photo</button>
    </div>
  );
};

export default ProfileImageComponent;
