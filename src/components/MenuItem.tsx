import { IonIcon, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { useLocation } from 'react-router';

interface MenuItemProps {
  icon: string;
  path: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, path, title }) => {
  const location = useLocation();
  return (
    <IonMenuToggle autoHide={false}>
      <IonItem className={location.pathname === path ? 'selected' : ''}
        routerLink={path} routerDirection="none" lines="none" detail={false}>
        <IonIcon slot="start" icon={icon} />
        <IonLabel>{title}</IonLabel>
      </IonItem>
    </IonMenuToggle>
  );
};

export default MenuItem;
