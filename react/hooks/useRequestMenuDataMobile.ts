import { useContext, useEffect } from "react";
import { useQuery } from 'react-apollo';
import getMenu from '../graphql/queries/getMenus.graphql';
import { MenuContext } from "../context/MenuContext";

export default function useRequestMenuDataMobile() {

  //STATE CONTEXT
  const {
    menuState,
    updateMenuData,
    activateFirstLevelMenu,
    deactivateSecondLevelMenu,
    deactivateThirdLevelMenu
  } = useContext(MenuContext);

  //DATA QUERY
  const { data } = useQuery(getMenu);

  //EFFECTS
  useEffect(() => {
    if(data) {
      updateMenuData(data);
      activateFirstLevelMenu();
      fetchCategoriesInfo(data);
    }
  }, [data])

  //METHODS
  const fetchCategoriesInfo = async (data: MenuDataResponse) => {
    await fetch(
      `/api/dataentities/MC/search?_fields=idCategoria,iconoCategoria,bannerDesktop,slug,fechaInicio,fechaFinal`,
      {
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/vnd.vtex.ds.v10+json"
          }
      }
    )
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      throw Error();
    })
    .then((res: CategoryInfo[]) => {
      const categoriesMap = new Map();
      res.forEach((category) => categoriesMap.set(category.idCategoria, category));
      const newDataInformation = data;

      newDataInformation.menus.forEach((data) => {
        data.categoryInfo = categoriesMap.get(data.id)
      })
      updateMenuData(newDataInformation);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const resetValues = () => {
    deactivateSecondLevelMenu();
    deactivateThirdLevelMenu();
    activateFirstLevelMenu();
  }

  //RETURN
  return {
    menuState,
    resetValues
  }
}


