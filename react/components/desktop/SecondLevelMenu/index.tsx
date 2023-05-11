import React, { useContext } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import { MenuContext } from "../../../context/MenuContext";
import ThirdLevelMenu from "../ThirdLevelMenu";
import './styles.css';

const CSS_HANDLES = [
  'desktopSecondLevel__generalContainer',
  'desktopSecondLevel__headerContainer',
  'desktopSecondLevel__headerLink',
  'desktopSecondLevel__internalContainer',
  'desktopSecondLevel__containerActive',
  'desktopSecondLevel__categorieContainer',
  'desktopSecondLevel__categorieLinkContainer',
  'desktopSecondLevel__categorieLink',
  'desktopSecondLevel__footerContainer',
  'desktopSecondLevel__footerLink',
]


export default function SecondLevelMenu() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATE CONTEXT
  const { menuState, activateSecondLevelMenu, deactivateSecondLevelMenu } = useContext(MenuContext);

  //JSX
  return(
    <div
      className={`
          ${handles.desktopSecondLevel__generalContainer}
          ${menuState.secondLevelActive && handles.desktopSecondLevel__containerActive}
          ${menuState.firstLevelActive && handles.desktopSecondLevel__containerActive}
      `}
      onMouseEnter={ activateSecondLevelMenu }
      onMouseLeave={ deactivateSecondLevelMenu }
    >

      <header className={handles.desktopSecondLevel__headerContainer}>
        <img src="https://panamericana.vteximg.com.br/arquivos/menu-custom-tecnologia-logo-desktop.png"/>
        <h4>{menuState.menusData.menus[menuState.firstLevelOrderId].name}</h4>
        <Link
          to={`/${menuState.menusData.menus[menuState.firstLevelOrderId].slug}`}
          className={handles.desktopSecondLevel__headerLink}
        >
          <p>Ver todo</p>
          <img src="https://panamericana.vteximg.com.br/arquivos/right-arrow-second-level-menu.svg"/>
        </Link>
      </header>

      <div className={handles.desktopSecondLevel__internalContainer}>
        {
          menuState.menusData.menus[menuState.firstLevelOrderId].menu?.map((menu) => {
            return(
              <div
                key={menu.id}
                className={handles.desktopSecondLevel__categorieContainer}
              >
                <h4>{menu.name}</h4>
                <ThirdLevelMenu menu={menu.menu}/>
                <div className={handles.desktopSecondLevel__categorieLinkContainer}>
                  <Link
                    to={`/${menu.slug}`}
                    className={handles.desktopSecondLevel__categorieLink}
                  >
                    Ver todo {menu.name}
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
      <footer className={handles.desktopSecondLevel__footerContainer}>
        <Link
          to={'/'}
          className={handles.desktopSecondLevel__footerLink}
        >
          <img src="https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a1123687-25df-4548-ada4-b7670aababcf___cb68c9ca57e1d1eb19f7925954f825db.png"/>
        </Link>
      </footer>

    </div>
  )
}

