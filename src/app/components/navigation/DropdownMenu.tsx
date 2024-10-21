'use client'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Breadcrumb from './Breadcrumbs';

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations();

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
                </button>
            </div>

            {isOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 z-10 w-64 h-auto max-h-[500px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto">
                    <div className="py-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link href="/" className="block px-6 py-4 text-xl text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('Hem')} 
                        </Link>
                        <Link href="/about" className="block px-6 py-4 text-xl text-gray-700 hover:bg-gray-100" role="menuitem">
                            {'Kliniken'} 
                        </Link>
                        <a href="#" className="block px-6 py-4 text-xl text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.breast_surgeries')}
                        </a>
                        <a href="#" className="block px-6 py-4 text-xl text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.the_implants')}
                        </a>
                        <a href="#" className="block px-6 py-4 text-xl text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.skin_injections')}
                        </a>
                        <a href="#" className="block px-6 py-4 text-xl text-gray-700 hover:bg-gray-100" role="menuitem">
                            {t('dropdown.price')}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;

