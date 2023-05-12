import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { Drawer, DrawerHeader, DrawerCloseButton } from 'vtex.store-drawer';
import { Link } from "vtex.render-runtime";
import './styles.css';
import FirstLevelMenuMobile from '../FirstLevelMenuMobile';
import SecondLevelMenuMobile from '../SecondLevelMenuMobile';
import ThirdLevelMenuMobile from '../ThirdLevelMenuMobile';
import useRequestMenuDataMobile from '../../../hooks/useRequestMenuDataMobile';


const CSS_HANDLES = [
  'mobileMenu__trigger',
  'mobileMenu__headerContainer',
  'mobileMenu__headerContainerActive',
  'mobileMenu__headerLogo',
  'mobileMenu__contentContainer',
  'mobileMenu__categoriesContainer',
  'mobileMenu__categoriesContainerInternal',
  'mobileMenu__footerContainer',
  'mobileMenu__footerList',
  'mobileMenu__footerLink',
  'mobileMenu__traslateSecondLevel',
  'mobileMenu__traslateThirdLevel',
]

export default function MainMenuMobile() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //MENU STATE MANAGE
  const { menuState, resetValues } = useRequestMenuDataMobile();

  //JSX
  return (
    <>
      <Drawer
        header={
          <DrawerHeader>
            <header
              className={`${handles.mobileMenu__headerContainer}`}
            >
              <img
                className={handles.mobileMenu__headerLogo}
                src="https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a51bbd12-c1bd-4663-96e7-da1be09bbd05___c42d5d021ea10e085384ca783acffc6c.svg"
                alt="Logo Panamericana"
              />
              <div
                onClick={resetValues}
              >
                <DrawerCloseButton />
              </div>
            </header>
          </DrawerHeader>
        }
        customIcon={
          <div className={handles.mobileMenu__trigger}>
            <img src='https://panamericana.vteximg.com.br/arquivos/menu-custom-icon-mobile.svg'/>
            <p>Menú</p>
          </div>
        }
      >
        <div className={handles.mobileMenu__contentContainer}>

          <div className={handles.mobileMenu__categoriesContainer}>
            <div
              className={`${handles.mobileMenu__categoriesContainerInternal}`}
            >
              {
                menuState.firstLevelActive &&
                <FirstLevelMenuMobile />
              }

              {
                menuState.secondLevelActive &&
                <SecondLevelMenuMobile />
              }

              {
                menuState.thirdLevelActive &&
                <ThirdLevelMenuMobile />
              }

            </div>
          </div>

          {
            menuState.firstLevelActive &&
            <footer className={handles.mobileMenu__footerContainer}>
              <ul className={handles.mobileMenu__footerList}>
                <li>
                  <Link
                    to={'/account/#/profile'}
                    className={handles.mobileMenu__footerLink}
                  >
                    <img src='https://panamericana.vteximg.com.br/arquivos/mi-cuenta-menu-custom.png'/>
                    <h4>Mi Cuenta</h4>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/contactenos'}
                    className={handles.mobileMenu__footerLink}
                  >
                    <img src='https://panamericana.vteximg.com.br/arquivos/ayuda-menu-custom.png'/>
                    <h4>¿Necesitas Ayuda?</h4>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/links-interes/terminos-y-condiciones'}
                    className={handles.mobileMenu__footerLink}
                  >
                    <img src='https://panamericana.vteximg.com.br/arquivos/terminos-condiciones-menu-custom.png'/>
                    <h4>Términos y Condiciones</h4>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/account/#/orders'}
                    className={handles.mobileMenu__footerLink}
                  >
                    <img className={handles.mobileMenu__footerLinkOrders} src='https://panamericana.vteximg.com.br/arquivos/mis-pedidos-menu-custom.png'/>
                    <h4>Mis Ordenes</h4>
                  </Link>
                </li>
              </ul>
            </footer>

          }

        </div>
      </Drawer>
    </>
  )
}
