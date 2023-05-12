import React, { useContext } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { MenuContext } from "../../../context/MenuContext";
import './styles.css';

const CSS_HANDLES = [
  'desktopFirtsLevel__generalContainer',
  'desktopFirtsLevel__listContainer',
  'desktopFirtsLevel__categorieActive'
]

export default function FirstLevelMenu() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATE CONTEXT
  const {
    menuState,
    activateSecondLevelMenu,
    updateFirstLevelMenuOrderId,
    updateFirstLevelId
  } = useContext(MenuContext);

  //JSX
  return (
    <div className={handles.desktopFirtsLevel__generalContainer}>
      <ul
       className={handles.desktopFirtsLevel__listContainer}
       onMouseEnter={ activateSecondLevelMenu }
      >
        {
          menuState.menusData.menus.map((menu) => {
            return(
              <li
                key={menu.id}
                onMouseEnter={() => {
                  updateFirstLevelMenuOrderId(menu.order - 1)
                  updateFirstLevelId(menu.id);
                }}
                className={(menuState.firstLevelOrderId === (menu.order - 1) && (menuState.firstLevelActive || menuState.secondLevelActive)) && handles.desktopFirtsLevel__categorieActive}
              >
                <h4>{menu.name}</h4>
                <img src="https://panamericana.vteximg.com.br/arquivos/right-arrow-menu.svg"/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

