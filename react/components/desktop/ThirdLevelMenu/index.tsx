import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import './styles.css';

const CSS_HANDLES = [
  'desktopThirdLevel__listContainer',
  'desktopThirdLevel__listElement',
  'desktopThirdLevel__listLink',
]

export default function ThirdLevelMenu({menu}:ThirdLevelMenuProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  if(menu) {
    return(
      <ul className={handles.desktopThirdLevel__listContainer}>
        {
          menu.map((menuItem) => {
            return(
              <li
                key={menuItem.id}
                className={handles.desktopThirdLevel__listElement}
              >
                <Link
                  to={`/${menuItem.slug}`}
                  className={handles.desktopThirdLevel__listLink}
                >
                  {menuItem.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return null
}

