import React, { useContext } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import { MenuContext } from "../../../context/MenuContext";
import './styles.css';

const CSS_HANDLES = [
  'mobileSecondLevel__generalContainer',
  'mobileSecondLevel__headerContainer',
  'mobileSecondLevel__headerBackContainer',
  'mobileSecondLevel__headerLinkContainer',
  'mobileSecondLevel__headerTitle',
  'mobileSecondLevel__headerLink',
  'mobileSecondLevel__internalContainer',
  'mobileSecondLevel__containerActive',
  'mobileSecondLevel__categorieContainer',
  'mobileSecondLevel__categorieLinkContainer',
  'mobileSecondLevel__categorieLink',
  'mobileSecondLevel__footerContainer',
  'mobileSecondLevel__footerLink',
]


export default function SecondLevelMenuMobile() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATE CONTEXT
  const { menuState, deactivateSecondLevelMenu, activateFirstLevelMenu, activateThirdLevelMenu, updateSecondLevelMenuOrderId } = useContext(MenuContext);

  //JSX
  return(
    <div
      className={`${handles.mobileSecondLevel__generalContainer}`}
    >

      <header className={handles.mobileSecondLevel__headerContainer}>
        <div
          className={handles.mobileSecondLevel__headerBackContainer}
          onClick={() => {
            deactivateSecondLevelMenu();
            activateFirstLevelMenu();
          }}
        >
          <img src="https://panamericana.vteximg.com.br/arquivos/left-arrow-menu.svg"/>
          <p>Volver al menú principal</p>
        </div>
        <div className={handles.mobileSecondLevel__headerLinkContainer}>
          <div className={handles.mobileSecondLevel__headerTitle}>
            <img src="https://panamericana.vteximg.com.br/arquivos/menu-custom-tecnologia-logo-desktop.png"/>
            <h4>{menuState.menusData.menus[menuState.firstLevelOrderId].name}</h4>
          </div>
          <Link
            to={`/${menuState.menusData.menus[menuState.firstLevelOrderId].slug}`}
            className={handles.mobileSecondLevel__headerLink}
          >
            <p>Ver todo</p>
            <img src="https://panamericana.vteximg.com.br/arquivos/right-arrow-second-level-menu.svg"/>
          </Link>
        </div>
      </header>

      <div className={handles.mobileSecondLevel__internalContainer}>
        {
          menuState.menusData.menus[menuState.firstLevelOrderId].menu?.map((menu) => {
            return(
              <div
                key={menu.id}
                className={handles.mobileSecondLevel__categorieContainer}
                onClick={() => {
                  deactivateSecondLevelMenu();
                  activateThirdLevelMenu();
                  updateSecondLevelMenuOrderId(menu.order - 1);
                }}
              >
                <h4>{menu.name}</h4>
                <img src="https://panamericana.vtexassets.com/arquivos/left-arrow-menu.svg"/>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}


