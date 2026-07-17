import React from 'react';
import { MainNav } from './Navigation/MainNav.tsx';
import { HeartIcon } from './assets';
import { Image } from './components/Image';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'Für Rahel' }) => {
  return (
    <>
      <div className="bg-fce4ec max-w-screen-md sticky top-0 bg-fce4ec block max-w-screen-m">
        <header className="bg-gray-400">
          <div className="flex">
            <Image
              src={HeartIcon}
              alt="Herz"
              width={48}
              height={48}
            />
            <h1 className="w-90 mx-auto text-center block font-indie text-5xl">{title}</h1>
            <Image
              src={HeartIcon}
              alt="Herz"
              width={48}
              height={48}
            />
          </div>
        </header>
        <MainNav />
      </div>
    </>
  );
};
