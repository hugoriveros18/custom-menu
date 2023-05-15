import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { Drawer, DrawerHeader, DrawerCloseButton } from 'vtex.store-drawer';
import { Link } from "vtex.render-runtime";
import FirstLevelMenu from '../FirstLevelMenu/index';
import SecondLevelMenu from '../SecondLevelMenu/index';
import './styles.css';
import useRequestMenuDataDesktop from '../../../hooks/useRequestMenuDataDesktop';


const CSS_HANDLES = [
  'desktopMenu__trigger',
  'desktopMenu__closeButton',
  'desktopMenu__headerContainer',
  'desktopMenu__headerContainerActive',
  'desktopMenu__headerLogo',
  'desktopMenu__contentContainer',
  'desktopMenu__contentContainerActive',
  'desktopMenu__footerContainer',
  'desktopMenu__footerList',
  'desktopMenu__footerLink',
  'desktopMenu__footerLinkOrders'
]

export default function MainMenuDesktop() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //MENU STATE MANAGE
  const { menuState, deactivateSecondLevelMenu } = useRequestMenuDataDesktop();

  //JSX
  return (
    <>
      <Drawer
        header={
          <DrawerHeader>
            <header
              className={`
                ${handles.desktopMenu__headerContainer}
                ${(menuState.firstLevelActive || menuState.secondLevelActive) ? handles.desktopMenu__headerContainerActive : undefined}
              `}
              onMouseEnter={ deactivateSecondLevelMenu }
            >
              <img
                className={handles.desktopMenu__headerLogo}
                src="https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a51bbd12-c1bd-4663-96e7-da1be09bbd05___c42d5d021ea10e085384ca783acffc6c.svg"
                alt="Logo Panamericana"
              />
              <div className={handles.desktopMenu__closeButton}>
                <DrawerCloseButton />
              </div>
            </header>
          </DrawerHeader>
        }
        customIcon={
          <div className={handles.desktopMenu__trigger}>
            <img src='https://panamericana.vteximg.com.br/arquivos/menu-custom-icon.svg'/>
            <p>MENÚ</p>
          </div>
        }
      >
        <div className={`${handles.desktopMenu__contentContainer} ${menuState.secondLevelActive ? handles.desktopMenu__contentContainerActive : undefined}`}>

          <FirstLevelMenu />

          <footer
            className={handles.desktopMenu__footerContainer}
            onMouseEnter={ deactivateSecondLevelMenu }
          >
            <ul className={handles.desktopMenu__footerList}>
              <li>
                <Link
                  to={'/account/#/profile'}
                  className={handles.desktopMenu__footerLink}
                >
                  <img src='https://panamericana.vteximg.com.br/arquivos/mi-cuenta-menu-custom.png'/>
                  <h4>Mi Cuenta</h4>
                </Link>
              </li>
              <li>
                <Link
                  to={'/contactenos'}
                  className={handles.desktopMenu__footerLink}
                >
                  <img src='https://panamericana.vteximg.com.br/arquivos/ayuda-menu-custom.png'/>
                  <h4>¿Necesitas Ayuda?</h4>
                </Link>
              </li>
              <li>
                <Link
                  to={'/links-interes/terminos-y-condiciones'}
                  className={handles.desktopMenu__footerLink}
                >
                  <img src='https://panamericana.vteximg.com.br/arquivos/terminos-condiciones-menu-custom.png'/>
                  <h4>Términos y Condiciones</h4>
                </Link>
              </li>
              <li>
                <Link
                  to={'/account/#/orders'}
                  className={handles.desktopMenu__footerLink}
                >
                  <img className={handles.desktopMenu__footerLinkOrders} src='https://panamericana.vteximg.com.br/arquivos/mis-pedidos-menu-custom.png'/>
                  <h4>Mis Ordenes</h4>
                </Link>
              </li>
            </ul>
          </footer>

        </div>

        <SecondLevelMenu />
      </Drawer>
    </>
  )
}
