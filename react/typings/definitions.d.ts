type MenuAction = {
  type: string
  payload?: any
}


interface MenuState {
  firstLevelId: string
  firstLevelOrderId: number
  secondLevelOrderId: number
  firstLevelActive: boolean
  secondLevelActive: boolean
  thirdLevelActive: boolean
  menusData: MenuDataResponse
  categoriesInfo: CategoryInfo[]
}


interface MenuContextProps {
  menuState: MenuState
  updateMenuData: (menuData: MenuDataResponse) => void
  updateCategoriesInfo: (categoriesInfo: CategoryInfo[]) => void
  updateFirstLevelId: (categoryId: string) => void
  activateFirstLevelMenu: () => void
  deactivateFirstLevelMenu: () => void
  activateSecondLevelMenu: () => void
  deactivateSecondLevelMenu: () => void
  activateThirdLevelMenu: () => void
  deactivateThirdLevelMenu: () => void
  updateFirstLevelMenuOrderId: (firstLevelMenuOrderId: number) => void
  updateSecondLevelMenuOrderId: (secondLevelMenuOrderId: number) => void
}

type ThirdLevelMenuProps = {
  menu: MenuThirdLevelResponse[] | null
}

type MenuThirdLevelResponse = {
  id: string
  name: string
  slug: string
  __typename: string
  order: number
}

type MenuSecondLevelResponse = {
  id: string
  name: string
  slug: string
  menu: MenuThirdLevelResponse[] | null
  __typename: string
  order: number

}

type MenuFirstLevelResponse = {
  id: string
  name: string
  slug: string
  menu: MenuSecondLevelResponse[]
  __typename: string
  order: number
  categoryInfo?: CategoryInfo
}

type MenuDataResponse = {
  menus: MenuFirstLevelResponse[]
}

type CategoryMenu = {
  id: string
  name: string
  __typename: string
}

type CategoriesDataResponse = {
  menus: CategoryMenu[]
}

type CategoryCardProps = {
  categoryData: CategoryMenu
  categoryInfo: CategoryInfo[] | null
  setRefetchData: React.Dispatch<React.SetStateAction<boolean>>
}

type CategoryInfo = {
  id?: string,
  bannerDesktop: string
  fechaFinal: string
  fechaInicio: string
  iconoCategoria: string
  idCategoria: string
  slug: string
  nombreCategoria?: string
}

type CategoriesInfo = {
  categories: CategoryInfo[]
}

type CategoryCardRegistro = {
  isModalOpen: boolean
  nombreCategoria: string | undefined
  idCategoria: string
  iconoCategoria: string
  iconoCategoriaError: string
  bannerDesktop: string
  bannerDesktopError: string
  slug: string
  slugError: string
  fechaInicio: string
  fechaInicioError: string
  fechaFinal: string
  fechaFinalError: string
  loadingFetch: boolean
  fetchSuccesfull: boolean
  fetchError: boolean
}

type CategoryCardRegistroProps = {
  categoryName: string
  categoryId: string
  setRefetchData: React.Dispatch<React.SetStateAction<boolean>>
}

type CategoryCardEditionProps = {
  boxInformation: CategoryInfo
  setRefetchData: React.Dispatch<React.SetStateAction<boolean>>
}
