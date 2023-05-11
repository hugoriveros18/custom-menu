import { useEffect, useReducer } from "react";
import categoryCardRegistrationReducer from "../reducers/categoryCardRegistrationReducer";
import { categoryRegistrationActions } from "../typings/variables";

const INITIAL_STATE: CategoryCardRegistro = {
  isModalOpen: false,
  nombreCategoria: '',
  idCategoria: '',
  iconoCategoria: '',
  iconoCategoriaError: '',
  bannerDesktop: '',
  bannerDesktopError: '',
  slug: '',
  slugError: '',
  fechaInicio: '',
  fechaInicioError: '',
  fechaFinal: '',
  fechaFinalError: '',
  loadingFetch: false,
  fetchSuccesfull: false,
  fetchError: false,
}

export default function useCategoryCardRegistroState({categoryName, categoryId, setRefetchData}: CategoryCardRegistroProps) {

  //REDUCER
  const [state, dispatch] = useReducer(categoryCardRegistrationReducer, INITIAL_STATE);

  //EFFECTS
  useEffect(() => {
    dispatch({type: categoryRegistrationActions.updateCategoryId, payload: categoryId});
    dispatch({type: categoryRegistrationActions.updateCategoryName, payload: categoryName});
  },[categoryName, categoryId])

  //METHODS
  const openModal = () => {
    dispatch({type: categoryRegistrationActions.openModal})
  }

  const closeModal = () => {
    dispatch({type: categoryRegistrationActions.closeModal})
  }

  const updateIconoCategoria = (value:string) => {
    dispatch({type: categoryRegistrationActions.updateCategoryIcon, payload: value})
  }

  const updateIconoCategoriaError = () => {
    dispatch({type: categoryRegistrationActions.updateCategoryIconError})
  }

  const updateBanner = (value:string) => {
    dispatch({type: categoryRegistrationActions.updateCategoryBanner, payload: value})
  }

  const updateBannerError = () => {
    dispatch({type: categoryRegistrationActions.updateCategoryBannerError})
  }

  const updateSlug = (value:string) => {
    dispatch({type: categoryRegistrationActions.updateCategorySlug, payload: value})
  }

  const updateSlugError = () => {
    dispatch({type: categoryRegistrationActions.updateCategorySlugError})
  }

  const updateInitialDate = (value:string) => {
    dispatch({type: categoryRegistrationActions.updateCategoryInitialDate, payload: value})
  }

  const updateInitialDateError = () => {
    dispatch({type: categoryRegistrationActions.updateCategoryInitialDateError})
  }

  const updateFinalDate = (value:string) => {
    dispatch({type: categoryRegistrationActions.updateCategoryFinalDate, payload: value})
  }

  const updateFinalDateError = () => {
    dispatch({type: categoryRegistrationActions.updateCategoryFinalDateError})
  }

  const updateFetchLoading = (value: boolean) => {
    dispatch({type: categoryRegistrationActions.updateLoadingFetch, payload: value})
  }

  const updateFetchSuccesfull = (value: boolean) => {
    dispatch({type: categoryRegistrationActions.updateFetchSuccesfull, payload: value})
  }

  const updateFetchError = (value: boolean) => {
    dispatch({type: categoryRegistrationActions.updateFetchError, payload: value})
  }

  const resetValues = () => {
    dispatch({type: categoryRegistrationActions.resetValues})
  }

  const createNewRegistration = async () => {
    updateFetchLoading(true);
    await fetch(`/api/dataentities/MC/documents`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(
        {
          bannerDesktop: state.bannerDesktop,
          bannerMobile: state.bannerDesktop,
          fechaFinal: state.fechaFinal.replace('T','DF'),
          fechaInicio: state.fechaInicio.replace('T','DF'),
          iconoCategoria: state.iconoCategoria,
          idCategoria: state.idCategoria,
          nombreCategoria: state.nombreCategoria,
          slug: state.slug
        }
      )
    })
    .then((res) => {
      if(res.ok) {
        updateFetchSuccesfull(true);
      } else {
        updateFetchError(true);
      }

      updateFetchLoading(false);
    })
    .then(() => {
      setTimeout(() => {
        setRefetchData(true);
        resetValues();
      },2000)
    })
  }

  const handleSubmit = () => {
    let error = false;
    if(state.iconoCategoria === '') {
      updateIconoCategoriaError();
      error = true;
    }
    if(state.bannerDesktop === '') {
      updateBannerError();
      error = true;
    }
    if(state.slug === '') {
      updateSlugError();
      error = true;
    }
    if(state.fechaInicio === '') {
      updateInitialDateError();
      error = true;
    }
    if(state.fechaFinal === '') {
      updateFinalDateError();
      error = true;
    }

    if(error) {
      return
    }
    createNewRegistration();
  }


  //RETURN
  return {
    state,
    openModal,
    closeModal,
    updateIconoCategoria,
    updateBanner,
    updateSlug,
    updateInitialDate,
    updateFinalDate,
    handleSubmit
  }
}


