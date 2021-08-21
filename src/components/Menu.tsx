import {
  IonContent,
  IonList,
  IonListHeader,
  IonMenu,
  IonNote,
} from '@ionic/react';
import { home, settings } from 'ionicons/icons';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="main-menu-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          <MenuItem title="Home" path="/page/Home" icon={home} />
          <MenuItem title="Settings" path="/page/Settings" icon={settings} />
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
