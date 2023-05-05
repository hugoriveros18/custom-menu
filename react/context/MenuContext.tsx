import React, { createContext, useReducer } from 'react'
import menuReducer from '../reducers/menuReducer';

//ESTADO INICIAL
export const menuInitialState: MenuState = {
  firstLevelId: "Guitar & Amps2967",
  secondLevelId: "Accessories44627",
  firstLevelIndex: 0,
  secondLevelIndex: 0,
  firstLevelItemName: "Guitar & Amps",
  secondLevelItemName: "Accessories",
  setFirstLevelMenu: true,
  setSecondLevelMenu: false,
  setThirdLevelMenu: false,
  thirdLevelLength: 0
}


//CREACION CONTEXTO
export const MenuContext = createContext( {} as MenuContextProps )


//CONTEXT PROVIDER
export default function MenuProvider ({ children }: any) {

  const [ menuState, dispatch ] = useReducer(menuReducer, menuInitialState)

  const changeItemsFirstLevelId = ( firstLevelId: string ) => {
    dispatch({ type: 'changeItemsFirstLevelId', payload: firstLevelId })
  }

  const changeItemsFirstLevelIndex = ( firstLevelIndex: number ) => {
    dispatch({ type: 'changeItemsFirstLevelIndex', payload: firstLevelIndex })
  }

  const changeSecondLevelIndex = ( secondLevelIndex: number ) => {
    dispatch({ type: 'changeSecondLevelIndex', payload: secondLevelIndex })
  }

  const changeFirstLevelItemName = ( firstLevelItemName: string ) => {
    dispatch({ type: 'changeFirstLevelItemName', payload: firstLevelItemName })
  }
  const changeSecondLevelItemName = ( secondLevelItemName: string ) => {
    dispatch({ type: 'changeSecondLevelItemName', payload: secondLevelItemName })
  }

  const changeItemsSecondLevelId = ( secondLevelId: string ) => {
    dispatch({ type: 'changeItemsSecondLevelId', payload: secondLevelId })
  }

  const changeFirstLevelMenu = ( ) => {
    dispatch({ type: 'changeFirstLevelMenu'})
  }

  const changeSecondLevelMenu = () => {
    dispatch({ type: 'changeSecondLevelMenu'})
  }

  const changeThirdLevelMenu = () => {
    dispatch({ type: 'changeThirdLevelMenu'})
  }

  const changeThirdLevelLength = ( thirdLevelLength: number ) => {
    dispatch({ type: 'changeThirdLevelLength', payload: thirdLevelLength })
  }

  return (
    <MenuContext.Provider value={{
      menuState,
      changeItemsFirstLevelId,
      changeItemsSecondLevelId,
      changeItemsFirstLevelIndex,
      changeSecondLevelIndex,
      changeFirstLevelItemName,
      changeSecondLevelItemName,
      changeFirstLevelMenu,
      changeSecondLevelMenu,
      changeThirdLevelMenu,
      changeThirdLevelLength
    }}>
      {children}
    </MenuContext.Provider>
  )
}
