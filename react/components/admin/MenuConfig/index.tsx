import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Layout, PageHeader,PageBlock } from 'vtex.styleguide';
import CategoryCard from "../CategoryCard";
import './styles.css';
import useRequestCategoriesAdmin from "../../../hooks/useRequestCategoriesAdmin";

const CSS_HANDLES = [
  'menuConfig__categoriesList'
]

export default function MenuConfig() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //MENU DATA
  const {
    categoriesData,
    categoriesInfo,
    setRefetchData
  } = useRequestCategoriesAdmin();

  //JSX
  return(
    <div>
      <Layout
        fullWidth
        pageHeader= {
          <PageHeader title="Configuracion Menu Custom"/>
        }
      >
        <PageBlock variation="full">
          <ul className={handles.menuConfig__categoriesList}>
            {
              categoriesData?.menus?.map((category) => {
                return (
                  <CategoryCard
                    key={category.id}
                    categoryData={category}
                    categoryInfo={categoriesInfo}
                    setRefetchData={setRefetchData}
                  />
                )
              })
            }
          </ul>
        </PageBlock>
      </Layout>
    </div>
  )
}

