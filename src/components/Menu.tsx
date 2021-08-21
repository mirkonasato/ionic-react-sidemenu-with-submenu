import {
  IonContent,
  IonList,
  IonListHeader,
  IonMenu,
} from '@ionic/react';
import { barChart, documentText, home, settings } from 'ionicons/icons';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="main-menu-list">
          <IonListHeader>Menu</IonListHeader>
          <MenuItem title="Home" path="/page/Home" icon={home} />
          <SubMenu title="Charts" icon={barChart}>
            <MenuItem title="Chart 1" path="/page/Chart1" />
            <MenuItem title="Chart 2" path="/page/Chart2" />
          </SubMenu>
          <SubMenu title="Reports" icon={documentText}>
            <MenuItem title="Report 1" path="/page/Report1" />
            <MenuItem title="Report 2" path="/page/Report2" />
          </SubMenu>
          <MenuItem title="Settings" path="/page/Settings" icon={settings} />
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
