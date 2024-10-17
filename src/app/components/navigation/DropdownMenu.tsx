// app/components/navigation/DropdownMenu.tsx
'use client'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl'; // Importera useTranslations

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations(); // Använd useTranslations för att hämta översättningar

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    <span className="text-3xl font-thin">X</span>
                    {isOpen && (
                        <svg
                            className="ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06 0l3.47 3.47 3.47-3.47a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="absolute bottom-full left-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.clinic')}
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.breast_surgeries')}
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.the_implants')}
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.skin_injections')}
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.price')}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
