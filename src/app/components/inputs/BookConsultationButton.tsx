'use client';
import React from 'react';

const BookConsultationButton: React.FC = () => {
    const handleClick = () => {
        alert('Boka konsultation klickad!');
    };

    return (
      <button
          onClick={handleClick}
          className="px-8 py-4 border-2 border-gray-500 text-gray-500 bg-transparent text-lg rounded-xl hover:bg-gray-100"
      >
          Boka konsultation
      </button>
    );
};

export default BookConsultationButton;

