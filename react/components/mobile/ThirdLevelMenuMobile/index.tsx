import React, { useContext, useState, useEffect } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import { MenuContext } from "../../../context/MenuContext";
import './styles.css';

const CSS_HANDLES = [
  'mobileThirdLevel__generalContainer',
  'mobileThirdLevel__listContainer',
  'mobileThirdLevel__listElement',
  'mobileThirdLevel__listLink',
  'mobileThirdLevel__headerContainer',
  'mobileThirdLevel__headerBackContainer',
  'mobileThirdLevel__headerLinkContainer',
  'mobileThirdLevel__categorieLinkContainer',
  'mobileThirdLevel__categorieLink'
]

export default function ThirdLevelMenuMobile() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATE CONTEXT
  const { menuState, activateSecondLevelMenu, deactivateThirdLevelMenu, activateFirstLevelMenu } = useContext(MenuContext);

  //LOCAL STATE
  const [ThirdLevelMenu, setThirdLevelMenu] = useState<MenuThirdLevelResponse[] | null>(null);
  const [secondLevelMenuName, setSecondLevelMenuName] = useState<string>('');
  const [secondLevelMenuSlug, setSecondLevelMenuSlug] = useState<string>('');

  //EFFECTS
  useEffect(() => {
    setThirdLevelMenu(menuState.menusData.menus[menuState.firstLevelOrderId].menu[menuState.secondLevelOrderId].menu);
    setSecondLevelMenuName(menuState.menusData.menus[menuState.firstLevelOrderId].menu[menuState.secondLevelOrderId].name);
    setSecondLevelMenuSlug(menuState.menusData.menus[menuState.firstLevelOrderId].menu[menuState.secondLevelOrderId].slug);
  },[menuState])

  //METHODS
  const resetValues = () => {
    deactivateThirdLevelMenu();
    activateFirstLevelMenu();
  }

  //JSX
  return(
    <div className={handles.mobileThirdLevel__generalContainer}>
      <header className={handles.mobileThirdLevel__headerContainer}>
        <div
          className={handles.mobileThirdLevel__headerBackContainer}
          onClick={() => {
            deactivateThirdLevelMenu();
            activateSecondLevelMenu();
          }}
        >
          <img src="https://panamericana.vteximg.com.br/arquivos/left-arrow-menu.svg"/>
          <p>Volver al menú anterior</p>
        </div>
        <div className={handles.mobileThirdLevel__headerLinkContainer}>
          <h4>{secondLevelMenuName}</h4>
        </div>
      </header>
      {
        ThirdLevelMenu &&
        <ul className={handles.mobileThirdLevel__listContainer}>
          {
            ThirdLevelMenu.map((menuItem) => {
              return(
                <li
                  key={menuItem.id}
                  className={handles.mobileThirdLevel__listElement}
                >
                  <Link
                    to={`/${menuItem.slug}`}
                    className={handles.mobileThirdLevel__listLink}
                    onClick={resetValues}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      }
      <div className={handles.mobileThirdLevel__categorieLinkContainer}>
        <Link
          to={`/${secondLevelMenuSlug}`}
          className={handles.mobileThirdLevel__categorieLink}
          onClick={resetValues}
        >
          Ver todo {secondLevelMenuName}
        </Link>
      </div>
    </div>
  )
}

