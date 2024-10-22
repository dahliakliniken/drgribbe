'use client';
import React from 'react';

const BookConsultationButton: React.FC = () => {
    const handleClick = () => {
        alert('Boka konsultation klickad!');
    };

    return (
      <button
      className="px-16 py-5 border-4 border-white text-white bg-transparent text-lg rounded-xl hover:bg-gray-100" // Ökad padding för att göra knappen bredare
    >
      Boka konsultation
    </button>
    );
};

export default BookConsultationButton;
