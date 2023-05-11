import React from 'react';
import MenuProvider from './context/MenuContext';
import MainMenuDesktop from './components/desktop/MainMenuDesktop';

export default function MenuDesktop() {
  return (
    <MenuProvider>
      <MainMenuDesktop />
    </MenuProvider>
  )
}
