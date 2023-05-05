type MenuAction =
  |{ type: 'changeItemsFirstLevelId', payload: string }
  | { type: 'changeItemsSecondLevelId', payload: string }
  | { type: 'changeItemsFirstLevelIndex', payload: number }
  | { type: 'changeSecondLevelIndex', payload: number }
  | { type: 'changeFirstLevelItemName', payload: string }
  | { type: 'changeSecondLevelItemName', payload: string }
  | { type: 'changeFirstLevelMenu' }
  | { type: 'changeSecondLevelMenu' }
  | { type: 'changeThirdLevelMenu' }
  | { type: 'changeThirdLevelLength', payload: number }


interface MenuState {
  firstLevelId?: string
  secondLevelId?: string
  firstLevelIndex: number
  secondLevelIndex: number
  firstLevelItemName: string
  secondLevelItemName: string
  setFirstLevelMenu: boolean
  setSecondLevelMenu: boolean
  setThirdLevelMenu: boolean
  thirdLevelLength: number
}


interface MenuContextProps {
  menuState: MenuState;
  changeItemsFirstLevelId: (firstLevelId: string) => void
  changeItemsSecondLevelId: (secondLevelId: string) => void
  changeItemsFirstLevelIndex: (firstLevelIndex: number) => void
  changeSecondLevelIndex: (secondLevelIndex: number) => void
  changeFirstLevelItemName: (firstLevelItemName: string) => void
  changeSecondLevelItemName: (firstLevelItemName: string) => void
  changeFirstLevelMenu: () => void
  changeSecondLevelMenu: () => void
  changeThirdLevelMenu: () => void
  changeThirdLevelLength: (thirdLevelLength: number) => void
}

type MenuThirdLevelResponse = {
  id: string
  name: string
  slug: string
  __typename: string
}

type MenuSecondLevelResponse = {
  id: string
  name: string
  slug: string
  menu: MenuThirdLevelResponse[] | null
  __typename: string

}

type MenuFirstLevelResponse = {
  id: string
  name: string
  slug: string
  menu: MenuSecondLevelResponse[]
  __typename: string
}

type MenuDataResponse = {
  menus: MenuFirstLevelResponse[]
}

interface LevelMenu {
  menuData: MenuDataResponse
}
