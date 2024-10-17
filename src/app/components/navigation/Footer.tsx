'use client'
import React from 'react';
import DropdownMenu from './DropdownMenu'; 

const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-4 flex items-center justify-center px-4">
            <div className="flex items-center justify-center space-x-4"> {}
                <img src="/images/DaliaLogo_GoldONWHITE.jpg" alt="Dalia Logo" className="h-10" />
                <DropdownMenu /> {}
            </div>
        </footer>
    );
};

export default Footer;