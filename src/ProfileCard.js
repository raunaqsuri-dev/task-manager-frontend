import React from 'react';

function ProfileCard({ name, age, city }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '300px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <h2>{name}</h2>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>City:</strong> {city}</p>
        </div>
    );
}

export default ProfileCard;