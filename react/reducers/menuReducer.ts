import { menuReducerActions } from "../typings/variables"

export default function menuReducer ( state: MenuState, action: MenuAction ): MenuState {

  switch ( action.type ) {
    case menuReducerActions.setMenuData:
      return {
        ...state,
        menusData: action.payload
      }

    case menuReducerActions.activateFirstLevelMenu:
      return {
        ...state,
        firstLevelActive: true

      }

    case menuReducerActions.deactivateFirstLevelMenu:
      return {
        ...state,
        firstLevelActive: false

      }

    case menuReducerActions.activateSecondLevelMenu:
      return {
        ...state,
        secondLevelActive: true

      }

    case menuReducerActions.deactivateSecondLevelMenu:
      return {
        ...state,
        secondLevelActive: false

      }

    case menuReducerActions.activateThirdLevelMenu:
      return {
        ...state,
        thirdLevelActive: true

      }

    case menuReducerActions.deactivateThirdLevelMenu:
      return {
        ...state,
        thirdLevelActive: false

      }

    case menuReducerActions.updateFirstLevelMenuOrderId:
      return {
        ...state,
        firstLevelOrderId: action.payload
      }

    case menuReducerActions.updateSecondLevelMenuOrderId:
      return {
        ...state,
        secondLevelOrderId: action.payload
      }

    default:
      return state
  }
}
