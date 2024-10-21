'use client';
import React from 'react';

const BookConsultationButton: React.FC = () => {
    const handleClick = () => {
        alert('Boka konsultation klickad!');
    };

    return (
      <button
          onClick={handleClick}
          className="px-12 py-4 border-2 border-white text-white bg-transparent text-lg rounded-xl hover:bg-gray-100"
      >
          Boka konsultation
      </button>
    );
};

export default BookConsultationButton;
