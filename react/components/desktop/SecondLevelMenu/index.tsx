import React, { useContext, useMemo } from "react";
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
  const {
    menuState,
    activateSecondLevelMenu,
    deactivateSecondLevelMenu
  } = useContext(MenuContext);

  //MEMO
  const iconBannerValidation = useMemo(() => {
    const fechaInicio = menuState?.menusData?.menus[menuState.firstLevelOrderId]?.categoryInfo?.fechaInicio;
    const fechaFinal = menuState?.menusData?.menus[menuState.firstLevelOrderId]?.categoryInfo?.fechaFinal;

    if(fechaInicio && fechaFinal) {
      const initialDate = new Date(fechaInicio.replace('DF','T'));
      const now = new Date();
      const finalDate = new Date(fechaFinal.replace('DF','T'));

      if(now.getTime() > initialDate.getTime() && now.getTime() < finalDate.getTime()) {
        return menuState.menusData.menus[menuState.firstLevelOrderId].categoryInfo;
      }
    }

    return undefined;
  }, [menuState.firstLevelId])

  //JSX
  return(
    <div
      className={`
          ${handles.desktopSecondLevel__generalContainer}
          ${menuState.secondLevelActive && handles.desktopSecondLevel__containerActive}
      `}
      onMouseEnter={ activateSecondLevelMenu }
      onMouseLeave={ deactivateSecondLevelMenu }
    >

      <header className={handles.desktopSecondLevel__headerContainer}>
        <img src={menuState.menusData.menus[menuState.firstLevelOrderId]?.categoryInfo?.iconoCategoria}/>
        <h4>{menuState.menusData.menus[menuState.firstLevelOrderId]?.name}</h4>
        <Link
          to={`/${menuState.menusData.menus[menuState.firstLevelOrderId]?.slug}`}
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
                key={menu?.id}
                className={handles.desktopSecondLevel__categorieContainer}
              >
                <h4>{menu?.name}</h4>
                <ThirdLevelMenu menu={menu?.menu}/>
                <div className={handles.desktopSecondLevel__categorieLinkContainer}>
                  <Link
                    to={`/${menu?.slug}`}
                    className={handles.desktopSecondLevel__categorieLink}
                  >
                    Ver todo {menu?.name}
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
      {
        iconBannerValidation &&
        <footer className={handles.desktopSecondLevel__footerContainer}>
          <Link
            to={iconBannerValidation.slug}
            className={handles.desktopSecondLevel__footerLink}
          >
            <img src={iconBannerValidation.bannerDesktop}/>
          </Link>
        </footer>
      }

    </div>
  )
}

