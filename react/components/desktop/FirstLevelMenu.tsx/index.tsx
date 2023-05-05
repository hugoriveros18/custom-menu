import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'desktopFirtsLevel__generalContainer',
  'desktopFirtsLevel__listContainer',
]

export default function FirstLevelMenu({menuData}:LevelMenu) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div className={handles.desktopFirtsLevel__generalContainer}>
      <ul className={handles.desktopFirtsLevel__listContainer}>
        {
          menuData.menus.map((firstLevelMenu) => {
            return(
              <li key={firstLevelMenu.id}>
                <h4>{firstLevelMenu.name}</h4>
                <img src="https://panamericana.vteximg.com.br/arquivos/right-arrow-menu.svg"/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

