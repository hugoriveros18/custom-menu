import { categoryRegistrationActions } from "../typings/variables";

const errorInputMessage = "Este campo es obligatorio";

export default function categoryCardRegistrationReducer ( state: CategoryCardRegistro, action: MenuAction ): CategoryCardRegistro {

  switch ( action.type ) {
    case categoryRegistrationActions.updateFullState:
      return action.payload

    case categoryRegistrationActions.openModal:
      return {
        ...state,
        isModalOpen: true
      }

    case categoryRegistrationActions.closeModal:
      return {
        ...state,
        isModalOpen: false
      }

    case categoryRegistrationActions.updateCategoryId:
      return {
        ...state,
        idCategoria: action.payload
      }

    case categoryRegistrationActions.updateCategoryName:
      return {
        ...state,
        nombreCategoria: action.payload
      }

    case categoryRegistrationActions.updateCategoryIcon:
      return {
        ...state,
        iconoCategoria: action.payload,
        iconoCategoriaError: ''
      }

    case categoryRegistrationActions.updateCategoryIconError:
      return {
        ...state,
        iconoCategoriaError: errorInputMessage
      }

    case categoryRegistrationActions.updateCategoryBanner:
      return {
        ...state,
        bannerDesktop: action.payload,
        bannerDesktopError: ''
      }

    case categoryRegistrationActions.updateCategoryBannerError:
      return {
        ...state,
        bannerDesktopError: errorInputMessage
      }

    case categoryRegistrationActions.updateCategorySlug:
      return {
        ...state,
        slug: action.payload,
        slugError: ''
      }

    case categoryRegistrationActions.updateCategorySlugError:
      return {
        ...state,
        slugError: errorInputMessage
      }

    case categoryRegistrationActions.updateCategoryInitialDate:
      return {
        ...state,
        fechaInicio: action.payload,
        fechaInicioError: ''
      }

    case categoryRegistrationActions.updateCategoryInitialDateError:
      return {
        ...state,
        fechaInicioError: errorInputMessage
      }

    case categoryRegistrationActions.updateCategoryFinalDate:
      return {
        ...state,
        fechaFinal: action.payload,
        fechaFinalError: ''
      }

    case categoryRegistrationActions.updateCategoryFinalDateError:
      return {
        ...state,
        fechaFinalError: errorInputMessage
      }

    case categoryRegistrationActions.updateLoadingFetch:
      return {
        ...state,
        loadingFetch: action.payload
      }

    case categoryRegistrationActions.updateFetchSuccesfull:
      return {
        ...state,
        fetchSuccesfull: action.payload
      }

    case categoryRegistrationActions.updateFetchError:
      return {
        ...state,
        fetchError: action.payload
      }

    case categoryRegistrationActions.resetValues:
      return {
        ...state,
        fetchError: false,
        fetchSuccesfull: false,
        isModalOpen: false
      }

    default:
      return state
  }
}
