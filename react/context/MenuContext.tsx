import React, { createContext, useReducer } from 'react'
import menuReducer from '../reducers/menuReducer';
import { menuReducerActions } from '../typings/variables';

//ESTADO INICIAL
export const menuInitialState: MenuState = {
  firstLevelOrderId: 0,
  secondLevelOrderId: 0,
  firstLevelActive: false,
  secondLevelActive: false,
  thirdLevelActive: false,
  menusData: {
    menus: []
  }
}


//CREACION CONTEXTO
export const MenuContext = createContext<MenuContextProps>( {} as MenuContextProps )


//CONTEXT PROVIDER
export default function MenuProvider ({ children }: any) {

  const [ menuState, dispatch ] = useReducer(menuReducer, menuInitialState)

  const updateMenuData = (menuData: MenuDataResponse) => {
    dispatch({type: menuReducerActions.setMenuData, payload: menuData});
  }

  const activateFirstLevelMenu = () => {
    dispatch({type: menuReducerActions.activateFirstLevelMenu});
  }

  const deactivateFirstLevelMenu = () => {
    dispatch({type: menuReducerActions.deactivateFirstLevelMenu});
  }

  const activateSecondLevelMenu = () => {
    dispatch({type: menuReducerActions.activateSecondLevelMenu});
  }

  const deactivateSecondLevelMenu = () => {
    dispatch({type: menuReducerActions.deactivateSecondLevelMenu});
  }

  const activateThirdLevelMenu = () => {
    dispatch({type: menuReducerActions.activateThirdLevelMenu});
  }

  const deactivateThirdLevelMenu = () => {
    dispatch({type: menuReducerActions.deactivateThirdLevelMenu});
  }

  const updateFirstLevelMenuOrderId = (firstLevelMenuOrderId: number) => {
    dispatch({type: menuReducerActions.updateFirstLevelMenuOrderId, payload: firstLevelMenuOrderId});
  }

  const updateSecondLevelMenuOrderId = (secondLevelMenuOrderId: number) => {
    dispatch({type: menuReducerActions.updateSecondLevelMenuOrderId, payload: secondLevelMenuOrderId});
  }

  return (
    <MenuContext.Provider value={{
      menuState,
      updateMenuData,
      activateFirstLevelMenu,
      deactivateFirstLevelMenu,
      activateSecondLevelMenu,
      deactivateSecondLevelMenu,
      updateFirstLevelMenuOrderId,
      updateSecondLevelMenuOrderId,
      activateThirdLevelMenu,
      deactivateThirdLevelMenu
    }}>
      {children}
    </MenuContext.Provider>
  )
}
