export default function menuReducer ( state: MenuState, action: MenuAction ): MenuState {

  switch ( action.type ) {
    case 'changeItemsFirstLevelId':
      return {
        ...state,
        firstLevelId: action.payload
      }

    case 'changeItemsSecondLevelId':
      return {
        ...state,
        secondLevelId: action.payload
      }

    case 'changeItemsFirstLevelIndex':
      return {
        ...state,
        firstLevelIndex: action.payload
      }

    case 'changeSecondLevelIndex':
      return {
        ...state,
        secondLevelIndex: action.payload
      }

    case 'changeFirstLevelItemName':
      return {
        ...state,
        firstLevelItemName: action.payload
      }

    case 'changeSecondLevelItemName':
      return {
        ...state,
        secondLevelItemName: action.payload
      }

    case 'changeFirstLevelMenu':
      return {
          ...state,
          setFirstLevelMenu: true,
          setSecondLevelMenu: false,
          setThirdLevelMenu: false
      }

    case 'changeSecondLevelMenu':
      return {
          ...state,
          setFirstLevelMenu: false,
          setSecondLevelMenu: true,
          setThirdLevelMenu: false
      }

    case 'changeThirdLevelMenu':
      return {
          ...state,
          setFirstLevelMenu: false,
          setSecondLevelMenu: false,
          setThirdLevelMenu: true
      }

    case 'changeThirdLevelLength':
    return {
      ...state,
      thirdLevelLength: action.payload
    }

    default:
      return state
  }
}
