import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { Drawer, DrawerHeader, DrawerCloseButton } from 'vtex.store-drawer';
// import { useQuery } from 'react-apollo';
// import getMenu from './graphql/queries/getMenus.graphql';
import { responseDataExample } from './dataResponseExample';
import FirstLevelMenu from './components/desktop/FirstLevelMenu.tsx';
import './styles.css';

const CSS_HANDLES = [
  'desktopMenu__headerContainer',
  'desktopMenu__headerLogo',
  'desktopMenu__contentContainer',
  'desktopMenu__contentContainerExample',
]

export default function MainMenuDesktop() {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DATA QUERY
  // const { data } = useQuery(getMenu);
  // console.log('data',data)

  //JSX
  return(
    <>
      <Drawer
        header={
          <DrawerHeader>
            <header className={handles.desktopMenu__headerContainer}>
              <img
                className={handles.desktopMenu__headerLogo}
                src="https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a51bbd12-c1bd-4663-96e7-da1be09bbd05___c42d5d021ea10e085384ca783acffc6c.svg"
                alt="Logo Panamericana"
              />
              <div>
                <DrawerCloseButton/>
              </div>
            </header>
          </DrawerHeader>
        }
        customIcon={
          <div>CLICK</div>
        }
        >
        {/* <DrawerTrigger>Click</DrawerTrigger> */}
        <div className={handles.desktopMenu__contentContainer}>
          <FirstLevelMenu menuData={responseDataExample}/>
        </div>
        <div className={handles.desktopMenu__contentContainerExample}>
          ABIERTO
        </div>
      </Drawer>
    </>
  )
}
