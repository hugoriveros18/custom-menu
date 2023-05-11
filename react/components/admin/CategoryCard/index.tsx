import React, { useMemo } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Box } from 'vtex.styleguide';
import useTimeValidation from "../../../hooks/useTimeValidation";
import './styles.css';
import CategoryCardRegistro from "../CategoryCardRegistro";
import CategoryCardEdition from "../CategoryCardEdition";

const CSS_HANDLES = [
  'categoryBox__generalContainer',
  'categoryBox__iconContainer',
  'categoryBox__bannerContainer',
  'categoryBox__updateContainer',
  'categoryBox__noRegistrationContainer',
]

export default function CategoryCard({categoryData, categoryInfo, setRefetchData}: CategoryCardProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //MEMO
  const categoryBoxInformation = useMemo(() => {
    if(categoryData && categoryInfo) {
      const currentCategory = categoryInfo.find(category => category.idCategoria === categoryData.id);
      return currentCategory;
    }

    return undefined;
  },[categoryData, categoryInfo])

  //TIME VALIDATION
  const {
    fechaInicioFormatted,
    fechaFinalFormatted,
    isActive
  } = useTimeValidation(categoryBoxInformation?.fechaInicio, categoryBoxInformation?.fechaFinal)


  //JSX
  return(
    <li>
      <Box
        title={categoryData.name}
      >
          {
            categoryBoxInformation
            ?
            <div className={handles.categoryBox__generalContainer}>
              <div className={handles.categoryBox__iconContainer}>
                <h4>Icono</h4>
                <img src={categoryBoxInformation.iconoCategoria}/>
              </div>
              <div className={handles.categoryBox__bannerContainer}>
                <h4>Banner</h4>
                <img src={categoryBoxInformation.bannerDesktop}/>
                <article>
                  <p><b>Slug: </b> {categoryBoxInformation.slug}</p>
                  <p><b>Fecha inicio: </b> {fechaInicioFormatted}</p>
                  <p><b>Fecha final: </b> {fechaFinalFormatted}</p>
                  <p>
                    <b>Estado: </b> <span style={isActive ? {color: 'green'} : {color: 'red'}}>{isActive ? 'Activo' : 'Inactivo'}</span>
                  </p>
                </article>
              </div>
              <div className={handles.categoryBox__updateContainer}>
                <CategoryCardEdition
                  boxInformation={categoryBoxInformation}
                  setRefetchData={setRefetchData}
                />
              </div>
            </div>
            :
            <div className={handles.categoryBox__noRegistrationContainer}>
              <p>NO SE ENCONTRÓ NINGUN REGISTRO</p>
              <div>
                <CategoryCardRegistro
                  categoryName={categoryData.name}
                  categoryId={categoryData.id}
                  setRefetchData={setRefetchData}
                />
              </div>
            </div>
          }
      </Box>
    </li>
  )
}

