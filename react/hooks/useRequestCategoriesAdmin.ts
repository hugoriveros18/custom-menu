import { useState, useEffect } from "react";
import { useQuery } from 'react-apollo';
import getCategories from '../graphql/queries/getCategories.graphql';

export default function useRequestCategoriesAdmin() {

  //DATA QUERY
  const { data } = useQuery(getCategories);

  //STATES
  const [categoriesData, setCategoriesData] = useState<CategoriesDataResponse | null>(null);
  const [categoriesInfo, setCategoriesInfo] = useState<CategoryInfo[] | null>(null);
  const [refetchData, setRefetchData] = useState<boolean>(false);

  //EFFECTS
  useEffect(() => {
    if(data) {
      setCategoriesData(data);
      fetchCategoriesInfo();
    }
  },[data])

  useEffect(() => {
    if(refetchData) {
      fetchCategoriesInfo();
      setRefetchData(false);
    }
  }, [refetchData])

  //METHODS
  const fetchCategoriesInfo = async () => {
    await fetch(
      `/api/dataentities/MC/search?_fields=id,idCategoria,iconoCategoria,bannerDesktop,slug,fechaInicio,fechaFinal,nombreCategoria`,
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
    .then((res) => {
      setCategoriesInfo(res);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  //RETURN
  return {
    categoriesData,
    categoriesInfo,
    setRefetchData
  }
}

