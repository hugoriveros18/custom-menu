import React, { useContext } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { MenuContext } from "../../../context/MenuContext";
import './styles.css';

const CSS_HANDLES = [
  'mobileFirtsLevel__generalContainer',
  'mobileFirtsLevel__listContainer',
  'mobileFirtsLevel__categorieActive'
]

export default function FirstLevelMenuMobile() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATE CONTEXT
  const { menuState, activateSecondLevelMenu ,updateFirstLevelMenuOrderId, deactivateFirstLevelMenu } = useContext(MenuContext);

  //JSX
  return (
    <div className={handles.mobileFirtsLevel__generalContainer}>
      <ul className={handles.mobileFirtsLevel__listContainer}>
        {
          menuState.menusData.menus.map((menu) => {
            return(
              <li
                key={menu.id}
                onClick={() => {
                  updateFirstLevelMenuOrderId(menu.order - 1);
                  deactivateFirstLevelMenu();
                  activateSecondLevelMenu();
                }}
                className={(menuState.firstLevelOrderId === (menu.order - 1) && menuState.secondLevelActive) ? handles.mobileFirtsLevel__categorieActive : undefined}
              >
                <h4>{menu.name}</h4>
                <img src="https://panamericana.vteximg.com.br/arquivos/right-arrow-update.svg"/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

