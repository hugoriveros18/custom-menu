import React from 'react';
import MenuProvider from './context/MenuContext';
import MainMenuMobile from './components/mobile/MainMenuMobile';

export default function MenuMobile() {
  return (
    <MenuProvider>
      <MainMenuMobile />
    </MenuProvider>
  )
}
